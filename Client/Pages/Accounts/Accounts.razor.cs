using BlazorBootstrap;
using Microsoft.AspNetCore.Components;
using Microsoft.AspNetCore.Components.Authorization;
using TanglewoodCandleCo.Shared.dbo;
using TanglewoodCandleCo.Wasm.Client.Services.Accounts;
using TanglewoodCandleCo.Wasm.Client.ViewModels.Accounts;
using TanglewoodCandleCo.Wasm.Shared;

namespace TanglewoodCandleCo.Wasm.Client.Pages.Accounts;
public partial class AccountBase : TWComponentBase
{
    #region Services
    [Inject]
    public required IAccountDataService AccountDataService { get; set; }
    [Inject]
    public AuthenticationStateProvider AuthenticationStateProvider { get; set; }
    #endregion

    [Parameter]
    public int Type{ get; set; }

    #region Domain Models
    public required List<Account> AccountList { get; set; }
    #endregion

    protected string recordCount = string.Empty;
    protected Grid<Account> accountGrid;
    protected override async Task OnParametersSetAsync()
    {
        AccountList = (List<Account>)await AccountDataService.GetAccountsAsync(Type);
        if (AccountList != null)
        {
            recordCount = AccountList.Count().ToString();
        }
    }

    protected async Task AddAccount()
    {
        showFlyout = true;
        var title = "Account Creation";
        var parameters = new Dictionary<string, object>();
        parameters.Add("AccountVm", new AccountViewModel() { ActionType = ActionType.Create });
        parameters.Add("CreateCallback", EventCallback.Factory.Create<AccountViewModel>(this, AdjustDisplay));

        await offcanvasAdd.ShowAsync<AccountJunction>(title, parameters);
    }
    private async Task AdjustDisplay(AccountViewModel vm)
    {
        await OnHideOffcanvasClick(false);

        Account at;
        string message = "";
        
        switch (vm.ActionType)
        {
            case ActionType.Create:
                at = vm.MapToDto();
                message = "saved";
                AccountList.Add(at);
                break;
            case ActionType.Clone:
                at = vm.MapToDto();
                message = "cloned";
                AccountList.Add(at);
                break;
            case ActionType.Delete:
                if (currentIdx >= 0)
                {
                    message = "deleted";
                    await AccountDataService.DeleteAccount(vm.Id);
                    AccountList.Remove(AccountList[currentIdx]);
                    currentIdx = -1;
                }
                break;
            default:
                at = vm.MapToDto();
                message = "updated";
                var idx = AccountList.FindIndex(x => x.Id == at.Id);
                AccountList[idx] = at;
                break;
        }

        await offcanvas.HideAsync();
        await accountGrid.RefreshDataAsync();
        recordCount = AccountList.Count().ToString();

        DisplayMessage(message, "Account");
    }

    protected void ShowAccountDetails(int column)
    {
        showFlyout = true;
        columnToShow = column;
    }
    protected async Task OnRowClick(GridRowEventArgs<Account> Accounts)
    {
        if (showFlyout == false)
            return;

        currentIdx = AccountList.FindIndex(x => x.Id == Accounts.Item.Id);
        var title = Accounts.Item.LastName.ToString();
        var parameters = new Dictionary<string, object>();
        parameters.Add("Account", Accounts.Item);
        parameters.Add("Column", columnToShow);
        parameters.Add("RowClickCallback", EventCallback.Factory.Create<AccountViewModel>(this, AdjustDisplay));
        await offcanvas.ShowAsync<AccountDetails>(title, parameters);
        
        showFlyout = false;
    }
}

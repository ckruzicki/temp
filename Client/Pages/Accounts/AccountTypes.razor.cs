using BlazorBootstrap;
using Microsoft.AspNetCore.Components;
using TanglewoodCandleCo.Shared.dbo;
using TanglewoodCandleCo.Wasm.Client.Services.Accounts;
using TanglewoodCandleCo.Wasm.Client.ViewModels.Accounts;
using TanglewoodCandleCo.Wasm.Shared;

namespace TanglewoodCandleCo.Wasm.Client.Pages.Accounts;
public partial class AccountTypes : ComponentBase
{
    #region Services
    [Inject]
    public required IAccountTypeDataService AccountTypeDataService { get; set; }
    #endregion

    #region Domain Models
    public List<AccountType> AccountTypeList { get; set; }
    #endregion

    protected string recordCount = string.Empty;

    private Offcanvas offcanvas = default!;
    private Offcanvas offcanvasAdd = default!;
    private bool showFlyout = false;
    private int columnToShow = 0;
    private int currentIdx = -1;

    private async Task OnHideOffcanvasClick() => await offcanvasAdd.HideAsync();
    private Grid<AccountType> accountTypeGrid;
    protected override async Task OnInitializedAsync()
    {
        AccountTypeList = (List<AccountType>)await AccountTypeDataService.GetAccountTypesAsync();
        if (AccountTypeList != null)
        {
            recordCount = AccountTypeList.Count().ToString();
        }
    }

    private async Task AddAccountType()
    {
        showFlyout = true;
        var title = "Create Account Type";
        var parameters = new Dictionary<string, object>();
        parameters.Add("AccountTypeVm", new AccountTypeViewModel() { ActionType = ActionType.Create });
        parameters.Add("CreateCallback", EventCallback.Factory.Create<AccountTypeViewModel>(this, AdjustDisplay));

        await offcanvasAdd.ShowAsync<AccountTypeChange>(title, parameters);
    }
    private async Task AdjustDisplay(AccountTypeViewModel vm)
    {
        var at = vm.MapToDto();
        switch (vm.ActionType)
        {
            case ActionType.Create:
                AccountTypeList.Add(at);
                break;
            case ActionType.Clone:
                AccountTypeList.Add(at);
                break;
            case ActionType.Delete:
                if (currentIdx >= 0)
                {
                    await AccountTypeDataService.DeleteAccountType(vm.Id);
                    AccountTypeList.Remove(AccountTypeList[currentIdx]);
                    currentIdx = -1;
                }
                break;
            default:
                var idx = AccountTypeList.FindIndex(x => x.Id == at.Id);
                AccountTypeList[idx] = at;
                break;
        }

        await accountTypeGrid.RefreshDataAsync();
        recordCount = AccountTypeList.Count().ToString();
    }
    private void ShowAccountTypeDetails(int column)
    {
        showFlyout = true;
        columnToShow = column;
    }
    private async Task OnRowClick(GridRowEventArgs<AccountType> accountTypes)
    {
        if(showFlyout == false) 
            return;

        currentIdx = AccountTypeList.FindIndex(x => x.Id == accountTypes.Item.Id);
        var title = accountTypes.Item.Name.ToString();
        var parameters = new Dictionary<string, object>();
        parameters.Add("AccountType", accountTypes.Item);
        parameters.Add("Column", columnToShow);
        parameters.Add("RowClickCallback", EventCallback.Factory.Create<AccountTypeViewModel>(this, AdjustDisplay));
        await offcanvas.ShowAsync<AccountTypeDetails>(title, parameters);

        showFlyout = false;
    }    
}

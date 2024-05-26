using BlazorBootstrap;
using Microsoft.AspNetCore.Components;
using Microsoft.AspNetCore.Components.Authorization;
using TanglewoodCandleCo.Shared.dbo;
using TanglewoodCandleCo.Wasm.Client.ViewModels.Accounts;
using TanglewoodCandleCo.Wasm.Shared;

namespace TanglewoodCandleCo.Wasm.Client.Pages.Accounts;
public partial class AccountTypeDetails
{
    #region Parameters
    [Parameter]
    public EventCallback<AccountTypeViewModel> CreateCallback { get; set; }
    [Parameter]
    public EventCallback<AccountTypeViewModel> RowClickCallback { get; set; }
    [Parameter]
    public AccountType AccountType { get; set; }
    [Parameter]
    public int Column {  get; set; }
    #endregion

    [Inject]
    AuthenticationStateProvider AuthProvider { get; set; }
    public AccountTypeViewModel AccountTypeVm { get; set; } = new AccountTypeViewModel();

    protected bool IsChecked { get; set; } = true;
    private Offcanvas offcanvas = default!;
    private async Task OnHideOffcanvasClick() => await offcanvas.HideAsync();

    protected override void OnInitialized()
    {
        SetAccountTypeVm();
    }
    protected override void OnParametersSet()
    {
        SetAccountTypeVm();
    }
    private void SetAccountTypeVm()
    {
        AccountTypeVm = AccountTypeVm.MapToVm(AccountType);
    }
    private async Task Edit(bool isEdit)
    {

        var state = await AuthProvider.GetAuthenticationStateAsync();
        if (state.User.Identity.IsAuthenticated)
        {
            var claims = state.User.Claims;
            string k = state.User.FindFirst("fullname").Value;

        }

        var actionType = isEdit == true ? ActionType.Update : ActionType.Clone;
        var AccountTypeVm = new AccountTypeViewModel();
        AccountTypeVm = AccountTypeVm.MapToVm(AccountType);
        AccountTypeVm.ActionType = actionType;

        if (!isEdit)
        {
            AccountTypeVm.Name += $" - Clone";
            AccountTypeVm.Id = 0;
        }

        var parameters = new Dictionary<string, object>();
        parameters.Add("AccountTypeVm", AccountTypeVm);
        parameters.Add("ChangeCallback", EventCallback.Factory.Create<AccountTypeViewModel>(this, SendChangeBackToParent));
        var titleAction = $"{Convert.ToString(actionType)} {AccountType.Name}";

        await offcanvas.ShowAsync<AccountTypeChange>(titleAction,parameters);
    }
    private async Task SendChangeBackToParent(AccountTypeViewModel vm)
    {
        AccountTypeVm = vm;
        await RowClickCallback.InvokeAsync(vm);
    }
    private async Task Delete()
    {
        //TODO: add confirm message
        AccountTypeVm.ActionType = ActionType.Delete;
        await RowClickCallback.InvokeAsync(AccountTypeVm);
    }
}

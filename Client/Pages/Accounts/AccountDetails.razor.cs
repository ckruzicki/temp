using BlazorBootstrap;
using Microsoft.AspNetCore.Components;
using TanglewoodCandleCo.Shared.dbo;
using TanglewoodCandleCo.Wasm.Client.ViewModels.Accounts;
using TanglewoodCandleCo.Wasm.Shared;

namespace TanglewoodCandleCo.Wasm.Client.Pages.Accounts
{
    public partial class AccountDetails
    {
        #region Parameters
        [Parameter]
        public EventCallback<AccountViewModel> CreateCallback { get; set; }
        [Parameter]
        public EventCallback<AccountViewModel> RowClickCallback { get; set; }
        [Parameter]
        public Account Account { get; set; }
        [Parameter]
        public int Column { get; set; }
        #endregion

        public AccountViewModel AccountVm { get; set; } = new AccountViewModel();

        private ConfirmDialog dialog = default!;
        private Offcanvas offcanvas = default!;
        private async Task OnHideOffcanvasClick() => await offcanvas.HideAsync();

        protected override void OnInitialized()
        {
            SetAccountVm();
        }
        protected override void OnParametersSet()
        {
            SetAccountVm();
        }
        private void SetAccountVm()
        {
            AccountVm = AccountVm.MapToVm(Account);
        }
        private async Task Edit(bool isEdit)
        {            
            var actionType = isEdit == true ? ActionType.Update : ActionType.Clone;
            var AccountVm = new AccountViewModel();
            AccountVm = AccountVm.MapToVm(Account);
            AccountVm.ActionType = actionType;

            if (!isEdit)
            {
                AccountVm.LastName += $" - Clone";
                AccountVm.Id = 0;
            }

            var parameters = new Dictionary<string, object>();
            parameters.Add("AccountVm", AccountVm);
            parameters.Add("ChangeCallback", EventCallback.Factory.Create<AccountViewModel>(this, SendChangeBackToParent));
            var titleAction = $"{Convert.ToString(actionType)} {Account.LastName}";

            await offcanvas.ShowAsync<AccountJunction>(titleAction, parameters);
        }

        private async Task SendChangeBackToParent(AccountViewModel vm)
        {
            AccountVm = vm;
            await RowClickCallback.InvokeAsync(vm);
            await offcanvas.HideAsync();
        }

        private async Task Delete()
        {
            string message1 =
                AccountVm.RecordtypeId != (int)RecordType.Customers ?
                $"Are you sure you want to delete {AccountVm.Fullname}?" :
                $"Are you sure you want to delete {AccountVm.FirstName} {AccountVm.LastName}?";

            var confirmation = await dialog.ShowAsync(
                title: "Confirm Deletion",
                message1: message1);
            if (confirmation)
            {
                AccountVm.ActionType = ActionType.Delete;
                await RowClickCallback.InvokeAsync(AccountVm);
            }
        }
    }
}

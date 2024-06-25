using BlazorBootstrap;
using Microsoft.AspNetCore.Components;
using TanglewoodCandleCo.Shared.dbo;
using TanglewoodCandleCo.Wasm.Client.Services.Accounts;
using TanglewoodCandleCo.Wasm.Client.ViewModels.Accounts;
using TanglewoodCandleCo.Wasm.Shared;

namespace TanglewoodCandleCo.Wasm.Client.Pages.Accounts;

public partial class AccountTypeChange
{
    #region Parameters
    [Parameter]
    public EventCallback<AccountTypeViewModel> CreateCallback { get; set; }
    [Parameter]
    public EventCallback<AccountTypeViewModel> ChangeCallback { get; set; }
    [Parameter]
    public AccountTypeViewModel AccountTypeVm { get; set; }
    #endregion

    #region Services
    [Inject]
    public required IAccountTypeDataService AccountTypeDataService { get; set; }
    #endregion

    public AccountType AccountType { get; set; }
    private Button saveBtn = default!;
    private async Task Save()
    {
        if (AccountTypeVm.ActionType == ActionType.NotSet)
        {
            throw new Exception("ActionType must be set!");
        }

        saveBtn.ShowLoading("Saving...");
        string message = "not set";

        switch (AccountTypeVm.ActionType)
        {
            case ActionType.Create:
                message = "saved";
                var results = await AccountTypeDataService.CreateAccountType(AccountTypeVm.MapToDto());
                AccountTypeVm.Id = results.Id;
                await CreateCallback.InvokeAsync(AccountTypeVm);
                break;
            case ActionType.Clone:
                message = "cloned";
                await AccountTypeDataService.CreateAccountType(AccountTypeVm.MapToDto());
                await ChangeCallback.InvokeAsync(AccountTypeVm);
                break;
            case ActionType.Update:
                message = "updated";
                await AccountTypeDataService.UpdateAccountType(AccountTypeVm.MapToDto());
                await ChangeCallback.InvokeAsync(AccountTypeVm);
                break;
            default:
                throw new Exception("ActionType must be set!");
        }

        saveBtn.HideLoading();
        ShowMessage(message == "not set" ? ToastType.Danger : ToastType.Success, 
            $"AcountType was {message} successfully!", true);
    }

    List<ToastMessage> messages = new List<ToastMessage>();
    private void ShowMessage(ToastType toastType, string message, bool autoHide) 
        => messages.Add(CreateToastMessage(toastType, message, autoHide));
    private ToastMessage CreateToastMessage(ToastType toastType, string message, bool autoHide)
        => new ToastMessage
        {
            Type = toastType,
            AutoHide = autoHide,
            Title = "Tanglewood Candle Co.",
            HelpText = $"{DateTime.Now.ToShortTimeString()}",
            Message = message,
        };

}

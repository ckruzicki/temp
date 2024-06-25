using Microsoft.AspNetCore.Components;
using TanglewoodCandleCo.Shared.dbo;
using TanglewoodCandleCo.Wasm.Client.Services.Accounts;
using TanglewoodCandleCo.Wasm.Client.Services.Systems;
using TanglewoodCandleCo.Wasm.Client.ViewModels.Accounts;
using TanglewoodCandleCo.Wasm.Shared;

namespace TanglewoodCandleCo.Wasm.Client.Pages.Accounts;

public partial class AccountJunction
{
    #region Parameters
    [Parameter]
    public EventCallback<AccountViewModel> CreateCallback { get; set; }
    [Parameter]
    public EventCallback<AccountViewModel> ChangeCallback { get; set; }
    [Parameter]
    public AccountViewModel AccountVm { get; set; }
    #endregion

    #region Services
    [Inject]
    public ISystemDataService SystemDataService { get; set; }
    [Inject]
    public required IAccountDataService AccountDataService { get; set; }
    #endregion

    #region Domain Models
    public IEnumerable<Recordtype> RecordtypeList { get; set; }
    #endregion

    private bool hideChoice = false;
    private bool hideAcctCreation = true;
    private bool isHidden = true;

    protected override async Task OnInitializedAsync()
    {
        RecordtypeList = await SystemDataService.GetRecordtypesByIdAsync(RecordType.Accounts);
    }
    protected override void OnParametersSet()
    {
        AccountVm.RecordType = (RecordType)AccountVm.RecordtypeId;

        if (AccountVm.ActionType == ActionType.Create)
        {
            if (AccountVm.RecordType == 0) //Chose has not yet been make
            {
                hideChoice = false;
                hideAcctCreation = true;
            }
        }
        else if(AccountVm.ActionType != ActionType.Create)
        {
            bool actionBool = AccountVm.ActionType == ActionType.Update || AccountVm.ActionType == ActionType.Clone;
            hideChoice = actionBool;
            hideAcctCreation = !actionBool;
        }
    }
    private void Select_option(RecordType rc)
    {
        hideChoice = true;
        hideAcctCreation = false;
        AccountVm.RecordType = rc;
    }
    private async Task Save()
    {
        if (AccountVm.ActionType == ActionType.NotSet)
        {
            throw new Exception("ActionType must be set!");
        }

        AccountVm.Recordtype = RecordtypeList.FirstOrDefault(x => x.Id == (int)AccountVm.RecordType);

        switch (AccountVm.ActionType)
        {
            case ActionType.Create:
                var results = await AccountDataService.CreateAccount(AccountVm.MapToDto());
                AccountVm.Id = results.Id;
                await CreateCallback.InvokeAsync(AccountVm);
                break;
            case ActionType.Clone:
                await AccountDataService.CreateAccount(AccountVm.MapToDto());
                await ChangeCallback.InvokeAsync(AccountVm);
                break;
            case ActionType.Update:
                await AccountDataService.UpdateAccount(AccountVm.MapToDto());
                await ChangeCallback.InvokeAsync(AccountVm);
                break;
            default:
                throw new Exception("ActionType must be set!");
        }

        hideChoice = false;
        hideAcctCreation = true;
    }
}

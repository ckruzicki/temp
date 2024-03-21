using Microsoft.AspNetCore.Components;
using Microsoft.AspNetCore.Components.QuickGrid;
using TanglewoodCandleCo.Shared.dbo;
using TanglewoodCandleCo.Wasm.Client.Services;

namespace TanglewoodCandleCo.Wasm.Client.Pages.Accounts;
public partial class AccountTypes : ComponentBase
{
    #region Services
    [Inject]
    public required IAccountTypeDataService AccountTypeDataService { get; set; }
    #endregion

    #region Domain Models
    public IQueryable<AccountType>? AccountTypeList { get; set; }
    #endregion

    protected string recordCount = string.Empty;
    public required QuickGrid<AccountType> accountTypeGrid;

    protected override async Task OnInitializedAsync()
    {
        AccountTypeList = (await AccountTypeDataService.GetAccountTypesAsync()).AsQueryable();
        recordCount = AccountTypeList.Count().ToString();
    }
}

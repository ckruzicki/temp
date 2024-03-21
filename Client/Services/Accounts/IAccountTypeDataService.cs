using TanglewoodCandleCo.Shared.dbo;

namespace TanglewoodCandleCo.Wasm.Client.Services
{
    public interface IAccountTypeDataService
    {
        Task<IEnumerable<AccountType>> GetAccountTypesAsync();
        Task<AccountType> AddAccountType(AccountType accountType);
    }
}

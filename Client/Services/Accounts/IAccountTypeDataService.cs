using TanglewoodCandleCo.Shared.dbo;

namespace TanglewoodCandleCo.Wasm.Client.Services.Accounts
{
    public interface IAccountTypeDataService
    {
        Task<IEnumerable<AccountType>> GetAccountTypesAsync();
        Task<AccountType> CreateAccountType(AccountType accountType);
        Task<AccountType> UpdateAccountType(AccountType accountType);
        Task DeleteAccountType(int id);
    }
}

using TanglewoodCandleCo.Shared.dbo;

namespace TanglewoodCandleCo.Wasm.Client.Services.Accounts
{
    public interface IAccountDataService
    {
        Task<IEnumerable<Account>> GetAccountsAsync(int recordtypeid);
        Task<Account> CreateAccount(Account account);
        Task<Account> UpdateAccount(Account account);
        Task DeleteAccount(int id);
    }
}

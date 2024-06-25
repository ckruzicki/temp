using Microsoft.AspNetCore.Components.Authorization;
using TanglewoodCandleCo.Shared.dbo;

namespace TanglewoodCandleCo.Wasm.Client.Services.Accounts
{
    public class AccountDataService : BaseDataService, IAccountDataService
    {
        public AccountDataService(HttpClient httpClient, IConfiguration configuration, AuthenticationStateProvider auth)
            : base(httpClient, configuration, auth) { }

        public async Task<IEnumerable<Account>> GetAccountsAsync(int recordtypeId)
        {
            return await HttpRequestForListAsync<Account>(HttpMethod.Get, $"api/account/{recordtypeId}");
        }

        public async Task<Account> CreateAccount(Account account)
        {
            return await HttpRequestForCreateAsync(HttpMethod.Post, "api/account", account);
        }

        public async Task<Account> UpdateAccount(Account account)
        {
            return await HttpRequestForUpdateAsync(HttpMethod.Put, "api/account", account);
        }

        public async Task DeleteAccount(int id)
        {
            var T = new Account();
            await SetUserFullname(T, HttpMethod.Delete);

            await _httpClient.DeleteAsync($"api/account/{id}/{T.UpdatedBy}");
        }
    }
}

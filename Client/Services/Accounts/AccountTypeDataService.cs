using Microsoft.AspNetCore.Components.Authorization;
using TanglewoodCandleCo.Shared.dbo;

namespace TanglewoodCandleCo.Wasm.Client.Services.Accounts
{
    public class AccountTypeDataService : BaseDataService, IAccountTypeDataService
    {
        public AccountTypeDataService(HttpClient httpClient, IConfiguration configuration, AuthenticationStateProvider auth)
            : base(httpClient, configuration, auth) { }

        public async Task<IEnumerable<AccountType>> GetAccountTypesAsync()
        {
            return await HttpRequestForListAsync<AccountType>(HttpMethod.Get, "api/accounttype");
        }

        public async Task<AccountType> CreateAccountType(AccountType accountType)
        {
            return await HttpRequestForCreateAsync(HttpMethod.Post, "api/accounttype", accountType);
        }

        public async Task<AccountType> UpdateAccountType(AccountType accountType)
        {
            return await HttpRequestForUpdateAsync(HttpMethod.Put, "api/accountType", accountType);
        }

        public async Task DeleteAccountType(int id)
        {
            await _httpClient.DeleteAsync($"api/accounttype/{id}");
        }
    }
}

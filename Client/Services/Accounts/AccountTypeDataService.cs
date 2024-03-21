using System.Text.Json;
using TanglewoodCandleCo.Shared.dbo;

namespace TanglewoodCandleCo.Wasm.Client.Services.Accounts
{
    public class AccountTypeDataService : BaseDataService, IAccountTypeDataService
    {
        private readonly JsonSerializerOptions _options = new JsonSerializerOptions { PropertyNameCaseInsensitive = true };

        public AccountTypeDataService(HttpClient httpClient, IConfiguration configuration)
            : base(httpClient, configuration) { }

        public async Task<IEnumerable<AccountType>> GetAccountTypesAsync()
        {
            return await HttpRequestForListAsync<AccountType>(HttpMethod.Get, "accounttype");
        }

        public Task<AccountType> AddAccountType(AccountType accountType)
        {
            throw new NotImplementedException();
        }
    }
}

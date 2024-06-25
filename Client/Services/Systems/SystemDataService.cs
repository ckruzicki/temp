using Microsoft.AspNetCore.Components.Authorization;
using TanglewoodCandleCo.Shared.dbo;
using TanglewoodCandleCo.Wasm.Shared;

namespace TanglewoodCandleCo.Wasm.Client.Services.Systems
{
    public class SystemDataService : BaseDataService, ISystemDataService
    {
        public SystemDataService(HttpClient httpClient, IConfiguration configuration, AuthenticationStateProvider auth)
            : base(httpClient, configuration, auth) { }

        public async Task<IEnumerable<Recordtype>> GetRecordtypesAsync()
        {
            return await HttpRequestForListAsync<Recordtype>(HttpMethod.Get, $"api/system/recordtype");
        }

        public async Task<IEnumerable<Recordtype>> GetRecordtypesByIdAsync(RecordType type)
        {
            return await HttpRequestForListAsync<Recordtype>(HttpMethod.Get, $"api/system/recordtype/{Convert.ToInt32(type)}");
        }
    }
}

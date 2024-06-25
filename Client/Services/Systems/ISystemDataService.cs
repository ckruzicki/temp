using TanglewoodCandleCo.Shared.dbo;
using TanglewoodCandleCo.Wasm.Shared;

namespace TanglewoodCandleCo.Wasm.Client.Services.Systems
{
    public interface ISystemDataService
    {
        Task<IEnumerable<Recordtype>> GetRecordtypesByIdAsync(RecordType type);
        Task<IEnumerable<Recordtype>> GetRecordtypesAsync();
    }
}

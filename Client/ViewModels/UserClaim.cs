using System.Text.Json.Serialization;

namespace TanglewoodCandleCo.Wasm.Client.ViewModels
{
    public class UserClaim
    {
        [JsonPropertyName("type")]
        public string Type { get; set; } = string.Empty;
        [JsonPropertyName("value")]
        public object Value { get; set; } = string.Empty;
    }
}

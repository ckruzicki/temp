using System.Text.Json;

namespace TanglewoodCandleCo.Wasm.Shared
{
    public class DeepClone
    {
        public static T DeepCopyJSON<T>(T input)
        {
            var jsonString = JsonSerializer.Serialize(input);
            return JsonSerializer.Deserialize<T>(jsonString);
        }
    }
}

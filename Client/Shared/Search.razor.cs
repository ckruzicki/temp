using Microsoft.AspNetCore.Components;

namespace TanglewoodCandleCo.Wasm.Client.Shared
{
    public partial class Search
    {
        [Parameter]
        public EventCallback<string> GlobalCallback { get; set; }
        
        [Parameter]
        public List<object>? Arguments { get; set; }

        public async Task GlobalSearch(string value)
        {
            await GlobalCallback.InvokeAsync(value);
        }
    }
}

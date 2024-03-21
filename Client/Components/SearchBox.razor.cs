using Microsoft.AspNetCore.Components;

namespace TanglewoodCandleCo.Wasm.Client.Components
{
    public partial class SearchBox<T> : ComponentBase
    {
        [Parameter]
        public required List<T> Items { get; set; }

        [Parameter]
        public EventCallback<string> OnSearch { get; set; }

        private string? searchItem;

        private async Task OnSearchClicked()
        {
            await OnSearch.InvokeAsync(searchItem);
        }
    }
}

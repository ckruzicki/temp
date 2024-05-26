using Microsoft.AspNetCore.Components;

namespace TanglewoodCandleCo.Wasm.Client.Components;
public partial class TwSpinner : ComponentBase
{
    [Parameter]
    public string LoadingName { get; set; }
}

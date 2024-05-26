using Microsoft.AspNetCore.Components;

namespace TanglewoodCandleCo.Wasm.Client.Shared
{
    public partial class NavMenu
    {
        [Inject]
        NavigationManager NavigationManager { get; set; }
        private void Home_OnClick()
        {

        }
        private void Accounts_OnClick()
        {
            NavigationManager.NavigateTo("accounttypes");
        }
    }
}

using Microsoft.AspNetCore.Components;
using Microsoft.AspNetCore.Components.Authorization;

namespace TanglewoodCandleCo.Wasm.Client.Pages
{
    public partial class Index
    {
        [Inject]
        public AuthenticationStateProvider authProvider { get; set; }

        protected async override Task OnInitializedAsync()
        {
            var state = await authProvider.GetAuthenticationStateAsync();
            if (state.User.Identity.IsAuthenticated)
            {

            }
        }
    }
}

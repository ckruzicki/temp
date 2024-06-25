using BlazorBootstrap;

namespace TanglewoodCandleCo.Wasm.Client.Shared
{
    public partial class MainMenu
    {
        protected Sidebar sidebar;
        protected IEnumerable<NavItem> navItems;
       
        private async Task<SidebarDataProviderResult> SidebarDataProvider(SidebarDataProviderRequest request)
        {
            if (navItems is null)
                navItems = await GetNavItems();

            return await Task.FromResult(request.ApplyTo(navItems));
        }

        private async Task<IEnumerable<NavItem>> GetNavItems()
        {
            var state = await auth.GetAuthenticationStateAsync();
            if (state.User.Identity.IsAuthenticated)
            {
                navItems = new List<NavItem>
                {
                     new NavItem { Id = "1", Href = "accounts", IconName = IconName.HouseDoorFill, Text = "Accounts", IconColor = IconColor.Success },
                     new NavItem { Id = "5", Href = "accounts", IconName = IconName.HouseDoorFill, Text = "All Accounts", IconColor = IconColor.Success, ParentId="1" },
                     new NavItem { Id = "2", Href = "accounts/2", IconName = IconName.PersonSquare, Text = "Customers", ParentId="1"},
                     new NavItem { Id = "3", Href = "accounts/3", IconName = IconName.CurrencyDollar, Text = "Suppliers", ParentId="1", IconColor = IconColor.Danger},
                     new NavItem { Id = "4", Href = "accounts/4", IconName = IconName.CloudLightningRainFill, Text = "Vendors", ParentId="1"},
                };
            }

            return navItems;
        }
    }
}

using Microsoft.AspNetCore.Components.Authorization;
using Microsoft.AspNetCore.Components.Web;
using Microsoft.AspNetCore.Components.WebAssembly.Hosting;
using TanglewoodCandleCo.Wasm.Client;
using TanglewoodCandleCo.Wasm.Client.BFF;
using TanglewoodCandleCo.Wasm.Client.Services;
using TanglewoodCandleCo.Wasm.Client.Services.Accounts;

var builder = WebAssemblyHostBuilder.CreateDefault(args);
builder.RootComponents.Add<App>("#app");
builder.RootComponents.Add<HeadOutlet>("head::after");

// authentication state and authorization
builder.Services.AddAuthorizationCore();
builder.Services.AddScoped<AuthenticationStateProvider, BffAuthenticationStateProvider>();

// HTTP client configuration
builder.Services.AddTransient<AntiforgeryHandler>();

builder.Services.AddHttpClient("backend", client => client.BaseAddress = new Uri(builder.HostEnvironment.BaseAddress))
    .AddHttpMessageHandler<AntiforgeryHandler>();
builder.Services.AddTransient(sp => sp.GetRequiredService<IHttpClientFactory>().CreateClient("backend"));

//builder.Services.AddCustomHttpClient<IAccountTypeDataService, AccountTypeDataService>(builder.Configuration);
builder.Services.AddHttpClient<IAccountTypeDataService, AccountTypeDataService>();

await builder.Build().RunAsync();

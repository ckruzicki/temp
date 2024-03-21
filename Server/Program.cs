using IdentityModel.Client;
using Microsoft.AspNetCore.Authentication;
using Microsoft.AspNetCore.Authentication.Cookies;
using Microsoft.AspNetCore.Authentication.OpenIdConnect;
using Microsoft.AspNetCore.Mvc.Authorization;
using Microsoft.IdentityModel.Protocols.OpenIdConnect;
using Serilog;
using Serilog.Events;
using Serilog.Sinks.SystemConsole.Themes;

Log.Logger = new LoggerConfiguration()
    .WriteTo.Console()
    .CreateBootstrapLogger();

try
{
    Log.Information("Starting TW Wasm Server host");

    var builder = WebApplication.CreateBuilder(args);

    builder.Services.AddRazorComponents()
             .AddInteractiveWebAssemblyComponents();

    builder.Host.UseSerilog((ctx, lc) => lc
        .MinimumLevel.Information()
        .MinimumLevel.Override("Microsoft", LogEventLevel.Warning)
        .MinimumLevel.Override("Microsoft.Hosting.Lifetime", LogEventLevel.Information)
        .MinimumLevel.Override("Microsoft.AspNetCore.Authentication", LogEventLevel.Information)
        .MinimumLevel.Override("IdentityModel", LogEventLevel.Debug)
        .MinimumLevel.Override("Duende.Bff", LogEventLevel.Debug)
        .Enrich.FromLogContext()
        .WriteTo.Seq("http://localhost:5341")
        .WriteTo.Console(outputTemplate: "[{Timestamp:HH:mm:ss} {Level}] {SourceContext}{NewLine}{Message:lj}{NewLine}{Exception}{NewLine}", theme: AnsiConsoleTheme.Literate));

    builder.Services.AddControllersWithViews();
    builder.Services.AddRazorPages()
        .AddMvcOptions(o => o.Filters.Add(new AuthorizeFilter())); 

    builder.Services.AddBff();

    builder.Services.AddAuthentication(options =>
    {
        options.DefaultScheme = CookieAuthenticationDefaults.AuthenticationScheme;
        options.DefaultChallengeScheme = OpenIdConnectDefaults.AuthenticationScheme;
        options.DefaultSignOutScheme = OpenIdConnectDefaults.AuthenticationScheme;
    })
    .AddCookie(CookieAuthenticationDefaults.AuthenticationScheme, options =>
    {
        options.Cookie.Name = "__Host-blazor";
        options.Cookie.SameSite = SameSiteMode.Strict;
    })
    .AddOpenIdConnect(OpenIdConnectDefaults.AuthenticationScheme, options =>
        {
           // options.SignInScheme = CookieAuthenticationDefaults.AuthenticationScheme;
            options.Authority = builder.Configuration["Authentication:Authority"];

            // confidential client using code flow + PKCE
            options.ClientId = "twwasm";
            options.ClientSecret = builder.Configuration["ClientSecret"];
            options.ResponseType = OpenIdConnectResponseType.Code; //with PKCE
            options.ResponseMode = OpenIdConnectResponseMode.Query;

            options.Scope.Clear();
            options.Scope.Add("openid");
            options.Scope.Add("profile");
            options.Scope.Add("craft-api.fullaccess");
            options.Scope.Add("fullname");
            options.Scope.Add("offline_access");
            //options.ClaimActions.MapJsonKey("role", "role");
            options.ClaimActions.MapJsonKey("fullname", "fullname");

            options.MapInboundClaims = false;            
            options.GetClaimsFromUserInfoEndpoint = true;
            options.SaveTokens = true;
            //options.ClaimActions.Remove("aud"); // Removes filter, makes sure it stays
            //options.ClaimActions.DeleteClaim("sid");
            //options.ClaimActions.DeleteClaim("idp");

            //options.TokenValidationParameters = new()
            //{
            //    NameClaimType = "given_name",
            //    RoleClaimType = "role",
            //};
        });

    builder.Services.AddHttpClient();
    builder.Services.AddControllers(); //prerender stuff

    var client = new HttpClient();
    var disco = await client.GetDiscoveryDocumentAsync("https://local-idp2.kruzicki.com");
    if (disco.IsError)
    {
        Console.WriteLine(disco.Error);
        return;
    }

    var app = builder.Build();

    app.UseSerilogRequestLogging();

    if (app.Environment.IsDevelopment())
    {
        app.UseWebAssemblyDebugging();
    }
    else
    {
        app.UseExceptionHandler("/Error");
        app.UseHsts();
    }

    app.UseHttpsRedirection();

    app.UseBlazorFrameworkFiles();
    app.UseStaticFiles();

    app.UseRouting();

    app.UseAuthentication();
    app.UseBff();
    app.UseAuthorization();

    app.MapBffManagementEndpoints();

    app.MapControllers()
        .RequireAuthorization()
        .AsBffApiEndpoint();

    app.MapFallbackToFile("index.html");

    app.Run();
}
catch (Exception ex)
{
    Log.Fatal(ex, "TW Server Wasm Host terminated unexpectedly");
}
finally
{
    Log.Information("Shut down of TW Server Wasm Host complete");
    Log.CloseAndFlush();
}

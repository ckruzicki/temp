using Duende.Bff;
using Duende.Bff.Yarp;
using IdentityModel.Client;
using Microsoft.AspNetCore.Authentication;
using Microsoft.AspNetCore.Authentication.Cookies;
using Microsoft.AspNetCore.Authentication.OpenIdConnect;
using Microsoft.AspNetCore.Builder;
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

    //builder.Services.AddRazorComponents()
    //         .AddInteractiveWebAssemblyComponents();

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
    builder.Services.AddRazorPages();
    ///.AddMvcOptions(o => o.Filters.Add(new AuthorizeFilter())); 






    builder.Services.AddBff(o => o.ManagementBasePath = "/account")
        .AddRemoteApis()
        .AddServerSideSessions();

    //builder.Services.AddReverseProxy()
    //    .AddBffExtensions();

    builder.Services.AddAuthentication(options =>
    {
        options.DefaultScheme = CookieAuthenticationDefaults.AuthenticationScheme;
        options.DefaultChallengeScheme = OpenIdConnectDefaults.AuthenticationScheme;
        options.DefaultSignOutScheme = OpenIdConnectDefaults.AuthenticationScheme;
    })
    .AddCookie(CookieAuthenticationDefaults.AuthenticationScheme, options =>
    {
        // set session lifetime
        // options.ExpireTimeSpan = TimeSpan.FromHours(8);
        // sliding or absolute
        // options.SlidingExpiration = true; // false;

        // host prefixed cookie name
        options.Cookie.Name = "__Host-blazor";
        //options.LoginPath = "";
        
        // strict SameSite handling
        options.Cookie.SameSite = SameSiteMode.Strict;
    })
    .AddOpenIdConnect(OpenIdConnectDefaults.AuthenticationScheme, options =>
        {
            options.Authority = builder.Configuration["Authentication:Authority"];

            // confidential client using code flow + PKCE
            options.ClientId = "twwasm";
            options.ClientSecret = builder.Configuration["ClientSecret"];
            options.ResponseType = OpenIdConnectResponseType.Code; //with PKCE
            options.ResponseMode = OpenIdConnectResponseMode.Query;

            //don't need
            options.Scope.Clear();
            options.Scope.Add("openid");
            options.Scope.Add("profile");
            //end non-need
            //options.Scope.Add("craft-api");
            options.Scope.Add("craft-api.fullaccess");
            options.Scope.Add("fullname");

            //options.Scope.Add("offline_access"); //refresh tokens
            //options.ClaimActions.MapJsonKey("role", "role");
            options.ClaimActions.MapJsonKey("fullname", "fullname");

            //options.MapInboundClaims = false;
            options.GetClaimsFromUserInfoEndpoint = true;
            options.SaveTokens = true;  //retrieve using httpContext
            options.ClaimActions.Remove("aud"); // Removes filter, makes sure it stays
            options.ClaimActions.DeleteClaim("sid");
            options.ClaimActions.DeleteClaim("idp");

            //options.TokenValidationParameters = new()
            //{
            //    NameClaimType = "given_name",
            //    RoleClaimType = "role",
            //};
        });
    
    // adds access token management
   // builder.Services.AddOpenIdConnectAccessTokenManagement();

    //builder.Services.AddHttpClient();
    //builder.Services.AddControllers(); //prerender stuff

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
    //TODO remove /users....
    //app.MapRemoteBffApiEndpoint(
    //    "/api", "https://localhost:7096"
    //).RequireAccessToken(TokenType.UserOrClient);

    //app.MapRemoteBffApiEndpoint(
    //    "/api", "https://localhost:7096")
    //    .RequireAccessToken(TokenType.User);
    //);

    app.UseHttpsRedirection();

    app.UseBlazorFrameworkFiles();
    app.UseStaticFiles();

    app.UseAuthentication();

    app.UseRouting();
    app.UseBff();
    app.UseAuthorization();

    //app.MapBffManagementEndpoints();

    app.MapRazorPages();
    app.MapDefaultControllerRoute();
    
    //app.MapControllers()
    //    .RequireAuthorization();

    //.AsBffApiEndpoint();

    app.UseEndpoints(e => {
        e.MapBffManagementEndpoints();
        e.MapRemoteBffApiEndpoint("/api", "https://localhost:7096/api")
            .RequireAccessToken();
    });

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

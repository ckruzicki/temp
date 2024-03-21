using Microsoft.Net.Http.Headers;
using System.Diagnostics.CodeAnalysis;

namespace TanglewoodCandleCo.Wasm.Client.Extensions
{
    public static class ExtensionOperations
    {
        public static IHttpClientBuilder AddCustomHttpClient<TClient, [DynamicallyAccessedMembers(DynamicallyAccessedMemberTypes.PublicConstructors)]
        TImplementation>(this IServiceCollection services, IConfiguration configuration)
           where TClient : class
           where TImplementation : class, TClient
        {
            return services.AddHttpClient<TClient, TImplementation>(
              (services, client) =>
              {
                  client.BaseAddress = new Uri(configuration["BaseUrl"]);
                  client.DefaultRequestHeaders.Clear();
                  client.DefaultRequestHeaders.Add(HeaderNames.Accept, "application/json");
              })
               // .AddUserAccessTokenHandler()
                .ConfigurePrimaryHttpMessageHandler(handler => new HttpClientHandler() { AutomaticDecompression = System.Net.DecompressionMethods.GZip });
        }
    }
}

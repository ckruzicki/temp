using System.Net.Http.Headers;
using System.Text.Json;

namespace TanglewoodCandleCo.Wasm.Client.Services
{
    public abstract class BaseDataService
    {
        protected HttpClient _httpClient;
        private readonly JsonSerializerOptions _options = new JsonSerializerOptions { PropertyNameCaseInsensitive = true };
        protected IConfiguration Configuration { get; }

        protected BaseDataService(HttpClient httpClient, IConfiguration configuration) 
        { 
            _httpClient = httpClient
                ?? throw new ArgumentNullException(nameof(httpClient));

            Configuration = configuration;

            var baseUri = Configuration.GetSection("BaseUrl").Value;

            _httpClient.BaseAddress = new Uri(baseUri.ToString());
            _httpClient.Timeout = new TimeSpan(0, 0, 120);
        }

        protected async Task<IEnumerable<T>> HttpRequestForListAsync<T>(HttpMethod httpMethod, string requestUri)
        {
            var request = SetHeaders(httpMethod, requestUri);

            using (var response = await _httpClient.SendAsync(request,
                 HttpCompletionOption.ResponseHeadersRead)
                     .ConfigureAwait(false))
            {
                var stream = await response.Content.ReadAsStreamAsync()
                    .ConfigureAwait(false);
                response.EnsureSuccessStatusCode();

                return JsonSerializer.Deserialize<List<T>>(stream, _options);
            }
        }

        private HttpRequestMessage SetHeaders(HttpMethod httpMethod, string requestUri)
        {
            var header = new HttpRequestMessage(httpMethod, requestUri);
            header.Headers.Clear();
            header.Headers.Accept.Add(new MediaTypeWithQualityHeaderValue("application/json"));
            header.Headers.AcceptEncoding.Add(new StringWithQualityHeaderValue("gzip"));

            return header;
        }
    }
}

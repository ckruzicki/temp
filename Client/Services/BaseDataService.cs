using Microsoft.AspNetCore.Components.Authorization;
using Serilog;
using System.Net.Http.Headers;
using System.Text;
using System.Text.Json;

namespace TanglewoodCandleCo.Wasm.Client.Services
{
    public abstract class BaseDataService
    {
        protected HttpClient _httpClient;
        private readonly JsonSerializerOptions _options = new JsonSerializerOptions { PropertyNameCaseInsensitive = true };
        protected IConfiguration Configuration { get; }
        protected AuthenticationStateProvider AuthenticationStateProvider { get; }

        protected BaseDataService(HttpClient httpClient, IConfiguration configuration, AuthenticationStateProvider auth) 
        { 
            _httpClient = httpClient
                ?? throw new ArgumentNullException(nameof(httpClient));

            Configuration = configuration;
            AuthenticationStateProvider = auth;
        }

        protected async Task<IEnumerable<T>> HttpRequestForListAsync<T>(HttpMethod httpMethod, string requestUri)
        {
            try
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
            catch (Exception ex)
            {
                Console.WriteLine(ex.Message);
                throw new Exception(ex.Message, ex.InnerException);
            }
        }
        protected Task<T> HttpRequestForUpdateAsync<T>(HttpMethod httpMethod, string requrestUri, T data)
        {
            return HttpRequestForCreateAsync(httpMethod, requrestUri, data);
        }

        protected async Task<T> HttpRequestForCreateAsync<T>(HttpMethod httpMethod, string requrestUri, T data, StringContent sc = null)
        {
            try
            {
                await SetUserFullname(data, httpMethod);
                var request = SetHeaders(httpMethod, requrestUri);

                if (sc != null)
                    request.Content = sc;
                else
                    request.Content = new StringContent(JsonSerializer.Serialize(data), Encoding.UTF8, "application/json");

                request.Content.Headers.ContentType = new MediaTypeHeaderValue("application/json");

                using (var response = await _httpClient.SendAsync(request, HttpCompletionOption.ResponseHeadersRead))
                {
                    var stream = await response.Content.ReadAsStreamAsync();

                    if (!response.IsSuccessStatusCode)
                    {
                        string type = httpMethod == HttpMethod.Post ? "Create" : "Update";

                        if (response.StatusCode == System.Net.HttpStatusCode.UnprocessableEntity)
                        {
                            var validationErrors = JsonSerializer.Deserialize<T>(stream, _options);
                            Log.Error($"Validation Error in SendRequestFor {type} " + validationErrors);
                        }
                        else if (response.StatusCode == System.Net.HttpStatusCode.Unauthorized)
                        {
                            Log.Error($"Authorization Error in SendRequestFor {type} " + response.RequestMessage);
                        }
                        response.EnsureSuccessStatusCode();
                        throw null;
                    }

                    return await JsonSerializer.DeserializeAsync<T>(stream, _options);
                }
            }
            catch (Exception ex)
            {
                Console.WriteLine(ex.Message);
                throw new Exception(ex.Message, ex);                
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

        /// <summary>
        /// This needs to be put at the server level
        /// </summary>
        /// <typeparam name="T">Typeof Record</typeparam>
        /// <param name="data">Data being sent to server</param>
        /// <param name="verb">Http Method</param>
        /// <returns></returns>
        protected async Task SetUserFullname<T>(T data, HttpMethod verb)
        {
            dynamic type = (T)data;

            var authState = await AuthenticationStateProvider.GetAuthenticationStateAsync();
            if (!authState.User.Identity.IsAuthenticated)
            {
                if (verb == HttpMethod.Post)
                    type.CreatedBy = "Unauthorized User";
                else if (verb == HttpMethod.Put || verb == HttpMethod.Delete)
                    type.UpdatedBy = "Unauthorized User";
            }
            else
            {
                var fullname = authState.User.Claims.FirstOrDefault(x => x.Type == "fullname");
                if (fullname != null)
                {
                    if (verb == HttpMethod.Post)
                        type.CreatedBy = fullname.Value;
                    else if (verb == HttpMethod.Put || verb == HttpMethod.Delete)
                        type.UpdatedBy = fullname.Value;
                }
                else
                {
                    if (verb == HttpMethod.Post)
                        type.CreatedBy = "Unknown User";
                    else if (verb == HttpMethod.Put)
                        type.UpdatedBy = "Unknown User";
                }
            }

            data = type;
        }
    }
}

namespace WEB_API.Web.Api.Middlewares
{
    using Microsoft.AspNetCore.Hosting;
    using Microsoft.AspNetCore.Http;
    using Newtonsoft.Json;
    using System;
    using System.Net;
    using System.Net.Mime;
    using System.Threading.Tasks;
    public class ExceptionHandlerPipeline
    {
        private readonly IHostingEnvironment _environment;
        private readonly RequestDelegate _request;

        public ExceptionHandlerPipeline(IHostingEnvironment environment, RequestDelegate request)
        {
            _environment = environment;
            _request = request;
        }

        public async Task InvokeAsync(HttpContext context)
        {
            try
            {
                await _request(context).ConfigureAwait(false);
            }
            
            catch (Exception exception)
            {
               
                if (_environment.IsDevelopment())
                {
                    throw exception;
                }

                context.Response.Clear();
                context.Response.StatusCode = (int)HttpStatusCode.InternalServerError;
                context.Response.ContentType = MediaTypeNames.Text.Plain;
                await context.Response.WriteAsync("An error has occured during process your request!").ConfigureAwait(false);
            }
        }
    }
}
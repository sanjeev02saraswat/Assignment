namespace WEB_API.Web.Api.Extensions
{
    using WEB_API.Web.Api.Middlewares;
    using Microsoft.AspNetCore.Builder;
    using Microsoft.AspNetCore.Hosting;
    public static class ApplicationBuilderExtension
    {
        public static void UseExceptionCustom(this IApplicationBuilder application, IHostingEnvironment environment)
        {
            if (environment.IsDevelopment())
            {
                application.UseDeveloperExceptionPage();
                application.UseDatabaseErrorPage();
            }

            application.UseExceptionMiddleware();
        }

        public static void UseExceptionMiddleware(this IApplicationBuilder application)
        {
            application.UseMiddleware<ExceptionHandlerPipeline>();
        }
    }
}
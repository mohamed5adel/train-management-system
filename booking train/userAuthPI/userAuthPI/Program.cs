using Microsoft.AspNetCore.Builder;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Logging;
using System;
using System.Data.SqlClient;
using userAuthPI.Services;

namespace userAuthPI
{
    public class Program
    {
        public static void Main(string[] args)
        {
            var builder = WebApplication.CreateBuilder(args);
            builder.WebHost.UseUrls("http://localhost:5089");

            // 🔹 Add services to the container.
            builder.Services.AddControllers();
            builder.Services.AddEndpointsApiExplorer();
            builder.Services.AddSwaggerGen();

            // 🔹 Configure CORS (Allow any Origin during development)
            builder.Services.AddCors(options =>
            {
                options.AddPolicy("_myAllowSpecificOrigins", policy =>
                {
                    policy.AllowAnyOrigin()  // Allow all origins, you can specify more restrictive policies if needed
                          .AllowAnyHeader()
                          .AllowAnyMethod();
                });
            });

            // 🔹 Register UserService correctly (without passing connection string manually)
            builder.Services.AddScoped<UserService>();

            var app = builder.Build();

            // 🔹 Enable Developer Exception Page during development
            if (app.Environment.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
                app.UseSwagger();
                app.UseSwaggerUI();
            }

            // 🔹 Use CORS (Place it before routing)
            app.UseCors("_myAllowSpecificOrigins");

            // 🔹 Test database connection at app startup
            TestDatabaseConnection(builder.Configuration.GetConnectionString("DefaultConnection"));

            // 🔹 Enable Authorization and Map Controllers
            app.UseAuthorization();
            app.MapControllers();

            // 🔹 Run the application
            app.Run();
        }

        // ✅ Test database connection at startup
        private static void TestDatabaseConnection(string connectionString)
        {
            try
            {
                using (var connection = new SqlConnection(connectionString))
                {
                    connection.Open();
                    Console.WriteLine("✅ Database connected successfully!");
                }
            }
            catch (Exception ex)
            {
                Console.WriteLine($"❌ Database connection failed: {ex.Message}");
            }
        }
    }
}

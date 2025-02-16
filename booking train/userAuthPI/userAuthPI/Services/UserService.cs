using System;
using System.Data.SqlClient;
using Dapper;
using BCrypt.Net;
using userAuthPI.Models;
using Microsoft.Extensions.Configuration;
using userAuthPl.Models;
using Microsoft.Extensions.Logging;

namespace userAuthPI.Services
{
    public class UserService
    {
        private readonly string _connectionString;
        private readonly ILogger<UserService> _logger;

        public UserService(IConfiguration configuration, ILogger<UserService> logger)
        {
            _connectionString = configuration.GetConnectionString("DefaultConnection");
            _logger = logger;
        }

        public async Task<string> RegisterUser(User user)
        {
            try
            {
                using (var connection = new SqlConnection(_connectionString))
                {
                    await connection.OpenAsync();

                    // 🔹 التحقق مما إذا كان المستخدم موجودًا مسبقًا
                    var existingUser = await connection.QueryFirstOrDefaultAsync<User>(
                        "SELECT * FROM Users WHERE Email = @Email", new { Email = user.Email });

                    if (existingUser != null)
                    {
                        return "User already exists.";
                    }

                    // 🔹 تشفير كلمة المرور
                    user.PasswordHash = BCrypt.Net.BCrypt.HashPassword(user.PasswordHash);

                    // 🔹 إدراج المستخدم الجديد
                    var query = @"
                        INSERT INTO Users (FirstName, LastName, Email, DateOfBirth, NationalIdNo, MobileNo, PasswordHash)
                        VALUES (@FirstName, @LastName, @Email, @DateOfBirth, @NationalIdNo, @MobileNo, @PasswordHash)";

                    int rowsAffected = await connection.ExecuteAsync(query, new
                    {
                        user.FirstName,
                        user.LastName,
                        user.Email,
                        DateOfBirth = user.DateOfBirth.HasValue ? user.DateOfBirth.Value.ToString("yyyy-MM-dd") : null,
                        user.NationalIdNo,
                        user.MobileNo,
                        user.PasswordHash
                    });

                    if (rowsAffected > 0)
                        return "Success";
                    else
                        return "Failed to insert user.";
                }
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "An error occurred during user registration");
                return $"Error: {ex.Message}";
            }
        }
        public async Task<User> LoginUser(string email, string password)
        {
            try
            {
                using (var connection = new SqlConnection(_connectionString))
                {
                    var query = "SELECT UserId, FirstName, LastName, Email, CAST(DateOfBirth AS DATE) AS DateOfBirth, NationalIdNo, MobileNo, PasswordHash FROM Users WHERE Email = @Email";

                    var user = await connection.QueryFirstOrDefaultAsync<User>(query, new { Email = email });

                    if (user != null)
                    {
                        //// Ensure DateOnly conversion if needed
                        //if (user.DateOfBirth != null)
                        //{
                        //    user.DateOfBirth = DateOnly.FromDateTime(user.DateOfBirth.Value.ToDateTime(TimeOnly.MinValue));
                        //}

                        if (BCrypt.Net.BCrypt.Verify(password, user.PasswordHash))
                        {
                            return user;
                        }
                    }

                    return null;
                }
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "An error occurred during user login");
                return null;
            }
        }



    }
}
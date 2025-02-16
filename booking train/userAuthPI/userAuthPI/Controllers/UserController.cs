using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using userAuthPI.Models;
using userAuthPI.Services;
using userAuthPl.Models;

namespace userAuthPI.Controllers
{
    [Route("/api/[controller]")]
    [ApiController]
    public class UserController : ControllerBase
    {
        private readonly UserService _userService;
        private readonly ILogger<UserController> _logger;

        public UserController(UserService userService , ILogger<UserController> logger)
        {
            _userService = userService;
            _logger = logger;
        }
 

        [HttpPost("register")]
        public async Task<IActionResult> Register([FromBody] User newUser)
        {
            string result = await _userService.RegisterUser(newUser);

            if (result == "Success")
                return Ok(new { message = "User registered successfully" });

            return BadRequest(new { message = result });
        }

        [HttpPost("login")]
        public async Task<IActionResult> Login([FromBody] LoginRequest loginRequest)
        {
            if (loginRequest == null || string.IsNullOrWhiteSpace(loginRequest.Email) || string.IsNullOrWhiteSpace(loginRequest.Password))
            {
                return BadRequest(new { message = "Email and password are required." });
            }

            var user = await _userService.LoginUser(loginRequest.Email, loginRequest.Password);

            if (user != null)
            {
                _logger.LogInformation($"User {loginRequest.Email} logged in successfully.");

                // 🔹 If using JWT, generate a token here
                // string token = _tokenService.GenerateToken(user);

                return Ok(new
                {
                    message = "Login successful",
                    user = new
                    {
                        user.UserId,
                        user.FirstName,
                        user.LastName,
                        user.Email
                        // token = token  // If JWT is implemented
                    }
                });
            }

            _logger.LogWarning($"Login failed for user {loginRequest.Email}: Invalid credentials.");
            return Unauthorized(new { message = "Invalid email or password." });
        }

    }

    public class LoginRequest
    {
        public string Email { get; set; }
        public string Password { get; set; }
    }
}

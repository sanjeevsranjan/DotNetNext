using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using DomainModels.Entities;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Microsoft.IdentityModel.Tokens;
using Repository;

namespace CoreWebAPI.Controllers
{
    [Route("api/[controller]")]
    [EnableCors("AllowAll")]
    public class TokenController : Controller
    {
        private IConfiguration _config;
        IUnitOfWork db;

        public TokenController(IConfiguration config, IUnitOfWork _db)
        {
            _config = config;
            db = _db;
        }

        [AllowAnonymous]
        [HttpPost]
        [EnableCors("AllowAll")]
        public IActionResult CreateToken([FromBody]User login)
        {
            IActionResult response = Unauthorized();
            var user = Authenticate(login);

            if (user != null)
            {
                var tokenString = BuildToken(user);
                response = Ok(new { token = tokenString });
            }

            return response;
        }

        private string BuildToken(User user)
        {
            var key = new SymmetricSecurityKey(Encoding.UTF8.GetBytes("somesecretkey123456781234567812345678abc"));
            var creds = new SigningCredentials(key, SecurityAlgorithms.HmacSha256);

            var token = new JwtSecurityToken(_config["Jwt:Issuer"],
              _config["Jwt:Issuer"],
              expires: DateTime.Now.AddMinutes(2),
              signingCredentials: creds);

            return new JwtSecurityTokenHandler().WriteToken(token);
        }
        [EnableCors("AllowAll")]
        private User Authenticate(User login)
        {
            User user=db.UserRepo.GetAll().FirstOrDefault(u => u.Email == login.Email && u.Password== login.Password);

            if (user != null)
            {
                if (login.Email == user.Email && login.Password == user.Password)
                {
                    user = new User { Email = login.Email };
                }
            }
            return user;
        }

    }
}
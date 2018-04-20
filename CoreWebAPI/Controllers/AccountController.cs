using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Security.Claims;
using System.Threading.Tasks;

using DomainModels.Entities;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;
using Repository;

namespace CoreWebAPI.Controllers
{

   
    [EnableCors("AllowAll")]
    public class AccountController : Controller
    {
        IUnitOfWork db;
        public AccountController(IUnitOfWork _db)
        {
            db = _db;
        }

        // GET api/values
        [Route("api/User/Register")]
        [HttpGet]
        public IEnumerable<User> Get()
        {

            return db.UserRepo.GetAll();

        }

        //[HttpGet("{id}")]
        [Route("api/User/Register/{id}")]
        public User Get(int id)
        {
            return db.UserRepo.GetById(id);
        }


        [Route("api/User/Register")]
        [HttpPost]
        public HttpResponseMessage Create([FromBody] User user)
        {
            if (user == null)
                return new HttpResponseMessage(HttpStatusCode.BadRequest);

            db.UserRepo.Add(user);
            db.SaveChanges();
            return new HttpResponseMessage(HttpStatusCode.Created);
        }

        [HttpGet]
        [Route("api/User/GetUserClaims")]
        [EnableCors("AllowAll")]
        public User GetUserClaims()
        {
            var identityClaims = (ClaimsIdentity)User.Identity;
            IEnumerable<Claim> claims = identityClaims.Claims;
            User model = new User()
            {
                UserName = "Sanjeevr1102", //identityClaims.FindFirst("Username").Value,
                Email = "Sanjeevr1102@gmail.com",//identityClaims.FindFirst("Email").Value,
                FirstName ="Sanjeev", //identityClaims.FindFirst("FirstName").Value,
                LastName ="Ranjan" //identityClaims.FindFirst("LastName").Value
            };
            return model;
        }

    }
}
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using DomainModels.Entities;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;
using Repository;

namespace CoreWebAPI.Controllers
{
    [Route("api/[controller]")]
    [EnableCors("AllowAll")]
    public class TeacherController : Controller
    {

        IUnitOfWork db;
        public TeacherController(IUnitOfWork _db)
        {
            db = _db;
        }

        // GET api/values
        [HttpGet]
        [Authorize]
        public IEnumerable<Teacher> Get()
        {
           
                return db.TeacherRepo.GetAll();
           
        }


        [HttpGet("{id}")]
        public Teacher Get(int id)
        {
            return db.TeacherRepo.GetById(id);
        }


        // GET api/values
        [HttpPost]
        public void Post([FromBody] Teacher teacher)
        {

             db.TeacherRepo.Add(teacher);
             db.SaveChanges();

        }
    }
}
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Threading.Tasks;
using DomainModels.Entities;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Repository;

namespace CoreWebAPI.Controllers
{
    [EnableCors("AllowAll")]
    [Produces("application/json")]
    [Route("api/Employee")]
    public class EmployeeController : Controller
    {
        IUnitOfWork db;
        public EmployeeController(IUnitOfWork _db)
        {
            db = _db;
        }
       
        [HttpGet]
        public IEnumerable<Employee> Get()
        {

            return db.EmployeeRepo.GetAll();

        }

        [HttpGet("{id}")]
        public Employee Get(int id)
        {
            return db.EmployeeRepo.GetById(id);
        }

        [HttpPost]
        public HttpResponseMessage Create([FromBody] Employee employee)
        {
            if (employee == null)
                return new HttpResponseMessage(HttpStatusCode.BadRequest);

            db.EmployeeRepo.Add(employee);
            db.SaveChanges();
            return new HttpResponseMessage(HttpStatusCode.Created);
        }
        
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] Employee employee)
        {
            employee.EmployeeID = id;
            db.EmployeeRepo.Update(employee);
            db.SaveChanges();
        }

        [HttpDelete("{id}")]
        public void Delete(int id)
        {
            db.EmployeeRepo.DeleteById(id);
            db.SaveChanges();
        }

    }
}
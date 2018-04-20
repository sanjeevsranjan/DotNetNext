using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;


namespace WebAPI.Controllers
{
    public class TeacherController : Controller
    {

        IUnitOfWork db;
        public TeacherController(IUnitOfWork _db)
        {
            db = _db;
        }
        // GET: Teacher
        public ActionResult Index()
        {
            return View();
        }
    }
}
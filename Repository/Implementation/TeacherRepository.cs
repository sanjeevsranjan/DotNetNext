using DomainModels.Entities;
using Microsoft.EntityFrameworkCore;
using Repository.Abstraction;
using System;
using System.Collections.Generic;
using System.Text;

namespace Repository.Implementation
{
    public class TeacherRepository : Repository<Teacher>
    {
        public TeacherRepository(DbContext db) : base(db)
        {
        }
    }
}

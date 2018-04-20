using DomainModels.Entities;
using Microsoft.EntityFrameworkCore;
using Repository.Abstraction;
using System;
using System.Collections.Generic;
using System.Text;

namespace Repository.Implementation
{
    public class StudentRepository : Repository<Student>
    {
        public StudentRepository(DbContext db) : base(db)
        {
        }
    }
}

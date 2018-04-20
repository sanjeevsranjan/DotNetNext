using DomainModels.Entities;
using Repository.Abstraction;
using System;
using System.Collections.Generic;
using System.Text;

namespace Repository
{
    public interface IUnitOfWork
    {
        IRepository<Student> StudentRepo { get; }
        IRepository<Teacher> TeacherRepo { get; }
        IRepository<User> UserRepo { get; }

        int SaveChanges();
    }
}

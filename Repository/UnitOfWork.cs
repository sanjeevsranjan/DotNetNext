using System;
using System.Collections.Generic;
using System.Text;
using Repository.Abstraction;
using DAL;
using DomainModels.Entities;
using Repository.Implementation;


namespace Repository
{
    public class UnitOfWork : IUnitOfWork
    {
        protected ApplicationContext db;
        public UnitOfWork(ApplicationContext c)
        {
            db = c;
        }

        private IRepository<Student> _StudentRepo;
        public IRepository<Student> StudentRepo
        {
            get
            {
                if (_StudentRepo == null)
                    _StudentRepo = new Repository<Student>(db);

                return _StudentRepo;
            }
        }

        private IRepository<Teacher> _TeacherRepo;
        public IRepository<Teacher> TeacherRepo
        {
            get
            {
                if (_TeacherRepo == null)
                    _TeacherRepo = new Repository<Teacher>(db);

                return _TeacherRepo;
            }
        }

        private IRepository<User> _UserRepo;
        public IRepository<User> UserRepo
        {
            get
            {
                if (_UserRepo == null)
                    _UserRepo = new Repository<User>(db);

                return _UserRepo;
            }
        }


        public int SaveChanges()
        {
            return db.SaveChanges();
        }
    }
}

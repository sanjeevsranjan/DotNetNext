using Microsoft.EntityFrameworkCore;
using Repository.Abstraction;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;


namespace Repository.Implementation
{
    public class Repository<TEntity> : IRepository<TEntity> where TEntity : class
    {
        protected DbContext db;

        public Repository(DbContext db)
        {
            this.db = db;
        }

        public object EntityState { get; private set; }

        public void Add(TEntity entity)
        {
            db.Set<TEntity>().Add(entity);
        }

        public void DeleteById(object Id)
        {
            TEntity entity = db.Set<TEntity>().Find(Id);
            if (entity != null)
            {
                db.Set<TEntity>().Remove(entity);
            }
        }

        public IEnumerable<TEntity> GetAll()
        {
            return db.Set<TEntity>().ToList();
        }

        public TEntity GetById(object Id)
        {
            return db.Set<TEntity>().Find(Id);
        }

        public void Update(TEntity entity)
        {
            db.Entry<TEntity>(entity).State = Microsoft.EntityFrameworkCore.EntityState.Modified;
        }
    }
}

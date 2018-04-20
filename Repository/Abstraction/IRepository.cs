using System;
using System.Collections.Generic;
using System.Text;

namespace Repository.Abstraction
{
    public interface IRepository<TEntity> where TEntity : class
    {
        void Add(TEntity entity);
        IEnumerable<TEntity> GetAll();
        TEntity GetById(object Id);
        void Update(TEntity entity);
        void DeleteById(object Id);
    }
}

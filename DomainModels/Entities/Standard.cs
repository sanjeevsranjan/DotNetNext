using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text;

namespace DomainModels.Entities
{
    public class Standard
    {
        [Key]
        public int StandardId { get; set; }
        public string StandardName { get; set; }

        public ICollection<Student1> Students { get; set; }
    }
}

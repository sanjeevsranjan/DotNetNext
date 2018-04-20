using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;

namespace DomainModels.Entities
{
    public class Student1
    {
        [Key]
        public int StudentID { get; set; }
        public string StudentName { get; set; }

        [ForeignKey("Standard")]
        public int StandardRefId { get; set; }
        public Standard Standard { get; set; }
    }
}

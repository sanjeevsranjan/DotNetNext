using System;
using System.Collections.Generic;
using System.Text;

namespace DomainModels.Entities
{
    public class Employee
    {
        public int EmployeeID { get; set; }
        public string EmployeeName { get; set; }
        public int Salary { get; set; }
        public string City { get; set; }
        public string JoiningDate { get; set; }
        public bool IsActive { get; set; }
    }
}

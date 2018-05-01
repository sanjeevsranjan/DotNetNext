using System;
using System.Collections.Generic;
using System.Text;

namespace DomainModels.Entities
{
    public class City
    {
        public int CityID { get; set; }
        public int CityName { get; set; }
        public State State { get; set; }
    }
}

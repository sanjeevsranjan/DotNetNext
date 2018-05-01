using System;
using System.Collections.Generic;
using System.Text;

namespace DomainModels.Entities
{
    public class State
    {
        public int StateID { get; set; }
        public string StateName { get; set; }
        public Country Country { get; set; }
    }
}

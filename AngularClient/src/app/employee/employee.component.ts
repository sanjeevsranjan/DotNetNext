import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../shared/employee.service';
import { Employee } from '../shared/employee.model';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html'
})
export class EmployeeComponent implements OnInit {
  employees=[];
  constructor(private _employeeService : EmployeeService) { }

  ngOnInit() {
     this._employeeService.getAllEmployee().subscribe(resEmployeeData=>this.employees=resEmployeeData as any);
  }

}

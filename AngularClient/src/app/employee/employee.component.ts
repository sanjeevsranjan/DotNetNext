import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../shared/employee.service';
import { Employee } from '../shared/employee.model';
import { DatePipe } from '@angular/common';


@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  //styleUrls: ['./employee.component.css'],
  providers: []
 
})
export class EmployeeComponent implements OnInit {
  names: any;
  selectedEmployee : Employee[];
  SelectedIDs:any[]=[];
  selectedAll: any;
  employees=[];
  Employee : Employee[] = [];
  
  //SelectedEmployee=[];
  constructor(private _employeeService : EmployeeService) { }

  ngOnInit() {
     this._employeeService.getAllEmployee().subscribe(resEmployeeData=>this.employees=resEmployeeData as any);
  }
  
  selectAll() {
    for (var i = 0; i < this.names.length; i++) {
      this.names[i].selected = this.selectedAll;
    }
  }
  checkIfAllSelected() {
    this.selectedAll = this.names.every(function(item:any) {
        return item.selected == true;
      })
  }
  deleteemployee(i:number){
    //alert(i);
    this._employeeService.RemoveEmployee(i);
  }
  checkbox(employee) {
    
    employee.selected = (employee.selected) ? true: false;
    this.selectedEmployee = employee;
}
selectID(id, event:any){
  
 this.SelectedIDs.push(id);
 //this.SelectedIDs=[12,14];
 
}
deleteSelected(){
  for (let item of this.SelectedIDs) {
    //console.log(item); // 1, "string", false
    this.deleteemployee(item);
  }
}
}

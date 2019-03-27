import { Component, OnInit } from '@angular/core';
import { Employee } from '../models/employee';
import { EmployeeserviceService } from '../service/employeeservice.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
employee:Employee[];
  constructor(private _employeeservice:EmployeeserviceService) {
    this.employee=this._employeeservice.getEmployees();
     }

  ngOnInit() {
  }

}

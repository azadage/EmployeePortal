import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import {FormsModule} from '@angular/forms';
import { EmployeeserviceService } from 'src/app/service/employeeservice.service';
import { NavigationEnd, Router } from '@angular/router';
import { Employee } from 'src/app/models/employee';

  
@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {
employee:Employee={
  id:null,
  name:null,
  gender:null,
  phone:null,
  emailId:null,
  department:null,
  photoPath:null,
  
}
  constructor(private router:Router,private _employeeservice:EmployeeserviceService) { }


  ngOnInit() {
  }
  onSubmit():void {
  this._employeeservice.save(this.employee)
  this.router.navigate(['/list'])
  }
}

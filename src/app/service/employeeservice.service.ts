import { Injectable } from '@angular/core';
import { Employee } from '../models/employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeserviceService {

employee:Employee[];

  constructor() {
    this.employee = [
      
      {id:1,name:"ashwini",gender:"female",phone:1234,emailId:"a@a",department:"HR",photoPath:"assets/images/a.jpg" },
    {id:1,name:"Niranjan",gender:"male",phone:1234,emailId:"a@a",department:"HR", photoPath:"assets/images/b.jpg" },
    {id:1,name:"Nitin",gender:"male",phone:1234,emailId:"a@a",department:"HR", photoPath:"assets/images/download.jpg" },
    {id:1,name:"Nitin",gender:"male",phone:1234,emailId:"a@a",department:"HR", photoPath:"assets/images/download.jpg" }
   
    ]
   }
   getEmployees():Employee[]{
    return this.employee;
   }
   save(employee:Employee){
     this.employee.push(employee);
   }
}

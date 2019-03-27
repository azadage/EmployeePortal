import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeeComponent } from './employee/employee.component';
import { CreateEmployeeComponent } from './Employee/create-employee/create-employee.component';
import { DeleteEmployeeComponent } from './Employee/delete-employee/delete-employee.component';
import { ListEmployeeComponent } from './employee/list-employee/list-employee.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  {path:'list',component:EmployeeComponent},
  {path:'create',component:CreateEmployeeComponent},
  {path:'delete',component:DeleteEmployeeComponent},
  // {path:'**',component:DashboardComponent},
  {path:'**',redirectTo:"/dashboard" ,pathMatch:'full'},
  // {path:'dashboard',component:DashboardComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

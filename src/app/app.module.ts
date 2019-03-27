import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeComponent } from './employee/employee.component';
import { CreateEmployeeComponent } from './Employee/create-employee/create-employee.component';
import { DeleteEmployeeComponent } from './Employee/delete-employee/delete-employee.component';

import { FormsModule } from '@angular/forms';
import { ListEmployeeComponent } from './employee/list-employee/list-employee.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EmployeeserviceService } from './service/employeeservice.service';
// import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
// import { ServiceComponent } from './Service/service/service.component';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeComponent,
    CreateEmployeeComponent,
    DeleteEmployeeComponent,
    ListEmployeeComponent,
    PageNotFoundComponent,
    DashboardComponent,
    // ReactiveFormComponent,
    // ServiceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [EmployeeserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }

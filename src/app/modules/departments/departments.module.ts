import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DepartmentsRoutingModule } from './departments-routing.module';
import { DepartmentsComponent } from './departments.component';
import { DepartmentBannerComponent } from './components/department-banner/department-banner.component';


@NgModule({
  declarations: [
    DepartmentsComponent,
    DepartmentBannerComponent
  ],
  imports: [
    CommonModule,
    DepartmentsRoutingModule
  ]
})
export class DepartmentsModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './core/header/header.component';
import { MainFooterComponent } from './core/main-footer/main-footer.component';
import { WelcomeToClinicComponent } from './core/welcome-to-clinic/welcome-to-clinic.component';
import { NotFoundComponent } from './core/not-found/not-found.component';
import { DepartmentComponent } from './core/department/department.component';
import { OurDoctorsComponent } from './core/our-doctors/our-doctors.component';
import { QualityHealthComponent } from './core/quality-health/quality-health.component';
import { AppointmentComponent } from './core/appointment/appointment.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainFooterComponent,
    WelcomeToClinicComponent,
    NotFoundComponent,
    DepartmentComponent,
    OurDoctorsComponent,
    QualityHealthComponent,
    AppointmentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

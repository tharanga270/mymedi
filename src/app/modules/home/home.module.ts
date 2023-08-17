import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { MainSliderComponent } from './components/main-slider/main-slider.component';
import { BookAppointmentComponent } from './components/book-appointment/book-appointment.component';


@NgModule({
  declarations: [
    HomeComponent,
    MainSliderComponent,
    BookAppointmentComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }

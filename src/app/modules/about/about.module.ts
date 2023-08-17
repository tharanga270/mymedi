import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AboutRoutingModule } from './about-routing.module';
import { AboutComponent } from './about.component';
import { AboutBannerComponent } from './components/about-banner/about-banner.component';


@NgModule({
  declarations: [
    AboutComponent,
    AboutBannerComponent
  ],
  imports: [
    CommonModule,
    AboutRoutingModule
  ]
})
export class AboutModule { }

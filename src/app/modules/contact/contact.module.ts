import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactRoutingModule } from './contact-routing.module';
import { ContactComponent } from './contact.component';
import { ContactBannerComponent } from './components/contact-banner/contact-banner.component';
import { ContactMapComponent } from './components/contact-map/contact-map.component';
import { ContactFormComponent } from './components/contact-form/contact-form.component';


@NgModule({
  declarations: [
    ContactComponent,
    ContactBannerComponent,
    ContactMapComponent,
    ContactFormComponent
  ],
  imports: [
    CommonModule,
    ContactRoutingModule
  ]
})
export class ContactModule { }

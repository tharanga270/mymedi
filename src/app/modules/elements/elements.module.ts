import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ElementsRoutingModule } from './elements-routing.module';
import { ElementsComponent } from './elements.component';
import { ElementBannerComponent } from './components/element-banner/element-banner.component';
import { ElementContentComponent } from './components/element-content/element-content.component';


@NgModule({
  declarations: [
    ElementsComponent,
    ElementBannerComponent,
    ElementContentComponent
  ],
  imports: [
    CommonModule,
    ElementsRoutingModule
  ]
})
export class ElementsModule { }

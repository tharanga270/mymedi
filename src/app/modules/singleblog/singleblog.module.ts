import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SingleblogRoutingModule } from './singleblog-routing.module';
import { SingleblogComponent } from './singleblog.component';
import { SingleblogLeftComponent } from './components/singleblog-left/singleblog-left.component';
import { SingleblogBannerComponent } from './components/singleblog-banner/singleblog-banner.component';


@NgModule({
  declarations: [
    SingleblogComponent,
    SingleblogLeftComponent,
    SingleblogBannerComponent
  ],
  imports: [
    CommonModule,
    SingleblogRoutingModule
  ]
})
export class SingleblogModule { }

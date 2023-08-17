import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlogRoutingModule } from './blog-routing.module';
import { BlogComponent } from './blog.component';
import { BlogBannerComponent } from './components/blog-banner/blog-banner.component';
import { BlogLeftComponent } from './components/blog-left/blog-left.component';


@NgModule({
  declarations: [
    BlogComponent,
    BlogBannerComponent,
    BlogLeftComponent
  ],
  imports: [
    CommonModule,
    BlogRoutingModule
  ]
})
export class BlogModule { }

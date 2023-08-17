import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{ path: 'home', loadChildren: () => import('./modules/home/home.module').then(m => m.HomeModule) }, { path: 'about', loadChildren: () => import('./modules/about/about.module').then(m => m.AboutModule) }, { path: 'blog', loadChildren: () => import('./modules/blog/blog.module').then(m => m.BlogModule) }, { path: 'singleblog', loadChildren: () => import('./modules/singleblog/singleblog.module').then(m => m.SingleblogModule) }, { path: 'departments', loadChildren: () => import('./modules/departments/departments.module').then(m => m.DepartmentsModule) }, { path: 'elements', loadChildren: () => import('./modules/elements/elements.module').then(m => m.ElementsModule) }, { path: 'contact', loadChildren: () => import('./modules/contact/contact.module').then(m => m.ContactModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

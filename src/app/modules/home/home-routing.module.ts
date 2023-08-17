import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';
import { HeaderComponent } from 'src/app/core/header/header.component';

const routes: Routes = [
  // { path: '', component: HomeComponent }
  { path: '', component: HomeComponent, children:[
    {path:'', redirectTo:'index', pathMatch:'full'},
    {path:'index',component:HeaderComponent},
  ] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }

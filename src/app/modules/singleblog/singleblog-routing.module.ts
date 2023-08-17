import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SingleblogComponent } from './singleblog.component';

const routes: Routes = [{ path: '', component: SingleblogComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SingleblogRoutingModule { }

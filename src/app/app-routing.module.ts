import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ChuckModule } from './chuck/chuck.module';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => ChuckModule
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

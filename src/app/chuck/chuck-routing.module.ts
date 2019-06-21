import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ChuckViewComponent } from './chuck-view/chuck-view.component';
import { ChuckAddComponent } from './chuck-add/chuck-add.component';
import { ChuckComponent } from './chuck/chuck.component';
import { ChuckEditComponent } from './chuck-edit/chuck-edit.component';
import { ChuckDynamicComponent } from './chuck-dynamic/chuck-dynamic.component';

const routes: Routes = [
  {
    path: '',
    component: ChuckComponent,
    children: [
      {
        path: 'view',
        component: ChuckViewComponent
      },
      {
        path: 'add',
        component: ChuckAddComponent
      },
      {
        path: 'edit',
        component: ChuckDynamicComponent//ChuckEditComponent
      }
    ]
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ChuckRoutingModule { }
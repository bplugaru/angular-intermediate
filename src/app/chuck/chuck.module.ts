import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChuckComponent } from './chuck/chuck.component';
import {
  MatCardModule,
  MatButtonModule,
  MatInputModule,
  MatIconModule,
  MatListModule
} from '@angular/material';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ChuckRoutingModule } from './chuck-routing.module';
import { ChuckViewComponent } from './chuck-view/chuck-view.component';
import { ChuckAddComponent } from './chuck-add/chuck-add.component';
@NgModule({
  declarations: [
    ChuckComponent,
    ChuckViewComponent,
    ChuckAddComponent
  ],
  exports: [
    ChuckComponent,
    ChuckAddComponent,
    ChuckViewComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    MatCardModule,
    MatButtonModule,
    MatInputModule,
    MatIconModule,
    MatListModule,
    ChuckRoutingModule
  ]
})
export class ChuckModule { }

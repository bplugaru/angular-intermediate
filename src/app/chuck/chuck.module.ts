import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChuckComponent } from './chuck/chuck.component';
import {
  MatCardModule,
  MatButtonModule,
  MatInputModule,
  MatIconModule,
  MatListModule,
  MatSelectModule,
  MatDatepickerModule,
  MatNativeDateModule
} from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ChuckRoutingModule } from './chuck-routing.module';
import { ChuckViewComponent } from './chuck-view/chuck-view.component';
import { ChuckAddComponent } from './chuck-add/chuck-add.component';
import { ChuckEditComponent } from './chuck-edit/chuck-edit.component';
@NgModule({
  declarations: [
    ChuckComponent,
    ChuckViewComponent,
    ChuckAddComponent,
    ChuckEditComponent
  ],
  exports: [
    ChuckComponent,
    ChuckAddComponent,
    ChuckViewComponent,
    ChuckEditComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatCardModule,
    MatButtonModule,
    MatInputModule,
    MatIconModule,
    MatListModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    ChuckRoutingModule
  ]
})
export class ChuckModule { }

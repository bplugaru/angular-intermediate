import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChuckComponent } from './chuck.component';
import {
  MatCardModule,
  MatButtonModule,
  MatInputModule,
  MatIconModule,
  MatListModule
} from '@angular/material';
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [ChuckComponent],
  exports: [ChuckComponent],
  imports: [
    CommonModule,
    FormsModule,
    MatCardModule,
    MatButtonModule,
    MatInputModule,
    MatIconModule,
    MatListModule
  ]
})
export class ChuckModule { }

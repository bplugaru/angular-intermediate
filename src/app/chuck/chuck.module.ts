import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChuckComponent } from './chuck.component';
import { MatCardModule, MatButtonModule } from '@angular/material';
@NgModule({
  declarations: [ChuckComponent],
  exports: [ChuckComponent],
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
  ]
})
export class ChuckModule { }

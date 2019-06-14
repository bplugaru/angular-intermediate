import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChuckRoutingModule } from './chuck-routing.module';

import { ChuckViewComponent } from './chuck-view/chuck-view.component';
import { ChuckAddComponent } from './chuck-add/chuck-add.component';
import { MatCardModule, MatButtonModule, MatIconModule, MatFormFieldModule, MatListModule, MatInputModule } from '@angular/material';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [ChuckViewComponent, ChuckAddComponent],
  imports: [
    CommonModule,
    FormsModule,

    ChuckRoutingModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    MatListModule,
    MatInputModule

  ]
})
export class ChuckModule { }

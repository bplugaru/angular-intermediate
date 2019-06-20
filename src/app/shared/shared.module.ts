import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VerifyNameDirective } from './directives/verify-name.directive';

@NgModule({
  declarations: [
    VerifyNameDirective
  ],
  exports: [
    VerifyNameDirective
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }

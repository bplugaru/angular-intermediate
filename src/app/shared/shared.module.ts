import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VerifyNameDirective } from './directives/verify-name.directive';
import { InputComponent } from './components/input/input.component';
import { SelectComponent } from './components/select/select.component';
import { DateComponent } from './components/date/date.component';
import { DynamicFormComponent } from './components/dynamic-form/dynamic-form.component';
import { DynamicFieldDirective } from './directives/dynamic-field.directive';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule, MatSelectModule, MatDatepickerModule, MatNativeDateModule } from '@angular/material';

@NgModule({
  declarations: [
    VerifyNameDirective,
    InputComponent,
    SelectComponent,
    DateComponent,
    DynamicFormComponent,
    DynamicFieldDirective
  ],
  exports: [
    VerifyNameDirective,
    InputComponent,
    SelectComponent,
    DateComponent,
    DynamicFormComponent,
    DynamicFieldDirective
  ],
  entryComponents: [
    InputComponent,
    SelectComponent,
    DateComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatInputModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule
  ]
})
export class SharedModule { }

import { Directive, Input } from '@angular/core';
import { NG_VALIDATORS, Validator, AbstractControl, ValidationErrors } from '@angular/forms';
import { verifyNameValidator } from '../validators/verify-name.validator';

@Directive({
  selector: '[appVerifyName]',
  providers: [{provide: NG_VALIDATORS, useExisting: VerifyNameDirective, multi: true}]

})
export class VerifyNameDirective implements Validator {
  
  @Input('appVerifyName') verifyName: string
  
  validate(control: AbstractControl): ValidationErrors {
    return this.verifyName ? verifyNameValidator(new RegExp(this.verifyName, 'i'))(control): null
  }
 

}

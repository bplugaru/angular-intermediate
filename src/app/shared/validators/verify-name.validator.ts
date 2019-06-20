import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export function verifyNameValidator(name: RegExp): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const error: ValidationErrors = { VerifyNameValidatorError: true };
    if (control && control.value) {
      const isRightName = name.test(control.value)
      if(!isRightName){
        return error;
      }  
    }
    return null;
  };
}
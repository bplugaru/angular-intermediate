import { FormGroup } from '@angular/forms';


export abstract class Base {
  config;
  group: FormGroup;
  getErrorMessage(name, field){
    let error ='';
    if(field.hasError('required')){
      error = `${name} is required` 
    }
    if(field.hasError('VerifyNameValidatorError')){
      error = 'Realy dude???'
    }
    return error;
  }
}
import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder, AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.scss']
})
export class DynamicFormComponent implements OnInit {

  @Input() config;
  form: FormGroup

  get controls() { return this.config.filter(({ type }) => type !== 'button') };
  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.form = this.createGroup();
  }
  createGroup(): FormGroup {
    const group = this.fb.group({});
    this.controls.forEach(control => group.addControl(control.name, this.createControl(control)))
    return group;
  }
  createControl(config: any): AbstractControl {
    const { disabled, validation, value } = config;
    return this.fb.control({ disabled, value }, validation);
  }

}

import { Directive, Input, ComponentFactoryResolver, ViewContainerRef, OnInit } from '@angular/core';
import { config } from 'rxjs';
import { FormGroup } from '@angular/forms';
import { InputComponent } from '../components/input/input.component';
import { DateComponent } from '../components/date/date.component';
import { SelectComponent } from '../components/select/select.component';



const components = {
  input: InputComponent,
  date: DateComponent,
  select: SelectComponent
}

@Directive({
  selector: '[appDynamicField]'
})
export class DynamicFieldDirective implements OnInit {
  @Input() config;
  @Input() formGroup: FormGroup;

  component;
  constructor(
    private readonly resolver: ComponentFactoryResolver,
    private readonly container: ViewContainerRef,
  ) { }

  ngOnInit(){
    const component = components[this.config.type];
    if(!component){
      throw `${this.config.type} is not implemented`
    }
    const factory =  this.resolver.resolveComponentFactory(component);
    this.component = this.container.createComponent(factory);
    this.component.instance.config = this.config;
    this.component.instance.group = this.formGroup;
  }



}

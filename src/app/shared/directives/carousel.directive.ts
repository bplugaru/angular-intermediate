import { Directive, TemplateRef, ViewContainerRef, Input } from '@angular/core';

export interface CarouselContext {
  $implicit: string;
  controller: {
    next: () => void;
    prev: () => void;
  };
}

@Directive({
  // tslint:disable-next-line:directive-selector
  selector: '[carousel]'
})
export class CarouselDirective {
  context: CarouselContext;
  index = 0;
  @Input('carouselOf') images: string[];
  constructor(
    private templateRef: TemplateRef<CarouselContext>,
    private viewContainerRef: ViewContainerRef
  ) { }

  ngOnInit() {
    this.context = {
      $implicit: this.images[0],
      controller: {
        next: () => this.next(),
        prev: () => this.prev()
      }
    }
    this.viewContainerRef.createEmbeddedView(this.templateRef, this.context)
  }
  prev() {
    this.index--;
    if (this.index < 0) {
      this.index = this.images.length - 1;;
    }
    this.context.$implicit = this.images[this.index];
  }

  next() {
    this.index++;
    if (this.index >= this.images.length) {
      this.index = 0;
    }
    this.context.$implicit = this.images[this.index]
  }

}

import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appLoadComponentDynamically]'
})
export class LoadComponentDynamicallyDirective {

  constructor(public viewContainerRef: ViewContainerRef) { }

}

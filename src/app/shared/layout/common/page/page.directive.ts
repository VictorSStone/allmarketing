import { Directive } from '@angular/core';

@Directive({
  selector: '[Page]',
  host: { 'class': 'page' }
})
export class PageDirective {

  constructor() {
  }

}

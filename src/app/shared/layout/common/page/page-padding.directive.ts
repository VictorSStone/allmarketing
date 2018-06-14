import { Directive } from '@angular/core';

@Directive({
  selector: '[PagePadding]',
  host: { 'class': 'page-padding' }
})
export class PagePaddingDirective {

  constructor() {
  }

}

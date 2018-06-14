import { Directive } from '@angular/core';

@Directive({
  selector: '[AspectRatioContent]',
  host: { '[class.aspect-ratio-content-element]': 'true' }
})
export class AspectRatioContentDirective {

  constructor() {
  }

}

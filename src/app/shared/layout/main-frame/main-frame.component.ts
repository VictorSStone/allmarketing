import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'main-frame',
  templateUrl: './main-frame.component.html',
  styleUrls: ['./main-frame.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class MainFrameComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {

  }

  onActivate(e, scrollContainer) {
    scrollContainer.scrollTop = 0;
  }
}

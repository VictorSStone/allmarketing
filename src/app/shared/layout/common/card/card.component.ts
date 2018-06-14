import { ChangeDetectionStrategy, Component, Directive, Input, ViewEncapsulation } from '@angular/core';

// noinspection TsLint
@Component({
  selector: 'card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
  host: { 'class': 'card' },
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FuryCard {
}

// noinspection TsLint
@Component({
  selector: 'card-header',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: { 'class': 'card-header' },
  template: `
    <div class="card-header-title-group">
      <ng-content select="card-header-title"></ng-content>
      <ng-content select="card-header-sub-title"></ng-content>
    </div>
    <ng-content></ng-content>
    <ng-content select="card-header-actions"></ng-content>
  `
})
export class FuryCardHeader {
}

// noinspection TsLint
@Component({
  selector: 'card-content',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: { 'class': 'card-content' },
  template: `
    <ng-content></ng-content>`
})
export class FuryCardContent {
}

// noinspection TsLint
@Directive({
  selector: 'card-header-title',
  host: { 'class': 'card-header-title' }
})
export class FuryCardHeaderTitle {
}

// noinspection TsLint
@Directive({
  selector: 'card-header-sub-title',
  host: { 'class': 'card-header-sub-title' }
})
export class FuryCardHeaderSubTitle {
}

// noinspection TsLint
@Directive({
  selector: 'card-header-actions',
  host: { 'class': 'card-header-actions' }
})
export class FuryCardHeaderActions {
}

// noinspection TsLint
@Directive({
  selector: 'card-actions',
  host: {
    'class': 'card-actions',
    '[class.card-actions-align-end]': 'align === "end"',
  }
})
export class FuryCardActions {
  /** Position of the actions inside the card. */
  @Input() align: 'start' | 'end' = 'start';
}

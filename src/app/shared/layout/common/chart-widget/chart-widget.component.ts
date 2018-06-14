import { ChangeDetectionStrategy, Component, Directive, ViewEncapsulation } from '@angular/core';

// noinspection TsLint
@Component({
  selector: 'chart-widget',
  templateUrl: './chart-widget.component.html',
  styleUrls: ['./chart-widget.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: { 'class': 'chart-widget' }
})
export class FuryChartWidget {
}

// noinspection TsLint
@Component({
  selector: 'chart-widget-header',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: { 'class': 'chart-widget-header' },
  template: `
    <div class="chart-widget-header-title-group">
      <ng-content select="chart-widget-header-title"></ng-content>
      <ng-content select="chart-widget-header-sub-title"></ng-content>
    </div>
    <ng-content select="chart-widget-header-actions"></ng-content>
  `
})
export class FuryChartWidgetHeader {
}

// noinspection TsLint
@Directive({
  selector: 'chart-widget-header-title',
  host: { 'class': 'chart-widget-header-title' }
})
export class FuryChartWidgetHeaderTitle {
}

// noinspection TsLint
@Directive({
  selector: 'chart-widget-header-sub-title',
  host: { 'class': 'chart-widget-header-sub-title' }
})
export class FuryChartWidgetHeaderSubTitle {
}

// noinspection TsLint
@Directive({
  selector: 'chart-widget-header-actions',
  host: { 'class': 'chart-widget-header-actions' }
})
export class FuryChartWidgetHeaderActions {
}

// noinspection TsLint
@Component({
  selector: 'chart-widget-content',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: { 'class': 'chart-widget-content' },
  template: `
    <ng-content></ng-content>`
})
export class FuryChartWidgetContent {
}

import { ModuleWithProviders, NgModule } from '@angular/core';
import { StartComponent } from './start.component';
import { SharedModule } from '../shared';

@NgModule({
  imports: [
    SharedModule
  ],
  declarations: [
    StartComponent
  ]
})
export class StartModule {}

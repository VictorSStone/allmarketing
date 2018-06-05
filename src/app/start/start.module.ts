import { ModuleWithProviders, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { StartComponent } from './start.component';
import { StartAuthResolver } from './start-auth-resolver.service';
import { SharedModule } from '../shared';
import { StartRoutingModule } from './start-routing.module';

@NgModule({
  imports: [
    SharedModule,
    StartRoutingModule
  ],
  declarations: [
    StartComponent
  ],
  providers: [
    StartAuthResolver
  ]
})
export class StartModule {}

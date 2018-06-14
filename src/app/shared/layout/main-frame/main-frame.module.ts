import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BackdropModule } from '../common/backdrop/backdrop.module';
import { LoadingIndicatorModule } from '../common/loading-indicator/loading-indicator.module';
import { MaterialModule } from '../common/material-components.module';
import { MediaQueryService } from '../common/mediareplay/media-replay.service';
import { FooterModule } from '../footer/footer.module';
import { SidenavModule } from '../sidenav/sidenav.module';
import { MainFrameComponent } from './main-frame.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    MaterialModule,
    LoadingIndicatorModule,

    // Core
    SidenavModule,
    FooterModule,
    BackdropModule
  ],
  declarations: [MainFrameComponent],
  providers: [MediaQueryService]
})
export class MainFrameModule {
}

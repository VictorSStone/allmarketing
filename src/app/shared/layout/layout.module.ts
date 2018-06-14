import { NgModule, Optional, SkipSelf } from '@angular/core';
import { MatIconRegistry } from '@angular/material';
import { PendingInterceptorModule } from './common/loading-indicator/pending-interceptor.module';
import { MainFrameModule } from './main-frame/main-frame.module';

@NgModule({
  imports: [
    PendingInterceptorModule,
    MainFrameModule
  ],
  providers: [
    MatIconRegistry
  ],
  declarations: []
})
export class LayoutModule {
  constructor(@Optional() @SkipSelf() parentModule: LayoutModule) {
    if (parentModule) {
      throw new Error(
        'CoreModule is already loaded. Import it in the AppModule only.');
    }
  }
}

import { ModuleWithProviders, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatCheckboxModule } from '@angular/material'
import { MatSidenavModule } from '@angular/material/sidenav';

import { AppComponent } from './app.component';
import { AuthModule } from './user/auth/auth.module';
import { StartModule } from './start/start.module';
import {
  FooterComponent,
  HeaderComponent,
  SidebarComponent,
  SharedModule
} from './shared';
import { AppRoutingModule } from './app-routing.module';
import { CoreModule } from './core/core.module';

@NgModule({
  declarations: [AppComponent, FooterComponent, HeaderComponent, SidebarComponent],
  imports: [
    BrowserModule,
    CoreModule,
    SharedModule,
    StartModule,
    AuthModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatSidenavModule
  ],
  exports: [
    MatSidenavModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}

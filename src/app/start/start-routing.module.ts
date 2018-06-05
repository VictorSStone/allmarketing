import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StartComponent } from './start.component';
import { StartAuthResolver } from './start-auth-resolver.service';

const routes: Routes = [
  {
    path: '',
    component: StartComponent,
    resolve: {
      isAuthenticated: StartAuthResolver
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StartRoutingModule {}

import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { MainFrameComponent } from './shared/layout/main-frame/main-frame.component';
import { StartAuthResolver } from './start/start-auth-resolver.service';

const routes: Routes = [
  {
    path: '',
    component: MainFrameComponent,
    resolve: {
      isAuthenticated: StartAuthResolver
    },
    loadChildren: './start/start.module#StartModule'
 },
 {
    path: 'settings',
    loadChildren: './user/settings/settings.module#SettingsModule'
  },
  {
    path: 'profile',
    loadChildren: './user/profile/profile.module#ProfileModule'
  },
  {
    path: 'editor',
    loadChildren: './blog/editor/editor.module#EditorModule'
  },
  {
    path: 'article',
    loadChildren: './blog/article/article.module#ArticleModule'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    // preload all modules; optionally we could
    // implement a custom preloading strategy for just some
    // of the modules (PRs welcome 😉)
    preloadingStrategy: PreloadAllModules
  })],
  exports: [
    RouterModule
  ],
  providers: [
    StartAuthResolver
  ]
})
export class AppRoutingModule {}

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CheckTutorial } from './providers/check-tutorial.service';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/tutorial',
    pathMatch: 'full'
  },
  {
    path: 'about',
    loadChildren: './pages/about/about.module#AboutModule'
  },
  {
    path: 'account',
    loadChildren: './pages/account/account.module#AccountModule'
  },
  {
    path: 'support',
    loadChildren: './pages/support/support.module#SupportModule'
  },
  {
    path: 'login',
    loadChildren: './pages/login/login.module#LoginModule'
  },
  {
    path: 'signup',
    loadChildren: './pages/signup/signup.module#SignUpModule'
  },
  {
    path: 'app',
    loadChildren: './pages/tabs-page/tabs-page.module#TabsModule'
  },
  {
    path: 'tutorial',
    loadChildren: './pages/tutorial/tutorial.module#TutorialModule',
    canLoad: [CheckTutorial]
  },
  {
    path: 'speakers',
    loadChildren: './pages/speaker-list/speaker-list.module#SpeakerListModule'
  },
  {
    path: 'speaker/:id',
    loadChildren:
      './pages/speaker-detail/speaker-detail.module#SpeakerDetailModule'
  },
  {
    path: 'map',
    loadChildren: './pages/map/map.module#MapModule'
  },
  {
    path: 'my-land',
    loadChildren: './pages/my-land/my-land.module#MyLandPageModule'
  },
  {
    path: 'my-land-detail/:landId',
    loadChildren:
      './pages/my-land-detail/my-land-detail.module#MyLandDetailPageModule'
  },
  {
    path: 'add-title',
    loadChildren: './pages/add-title/add-title.module#AddTitlePageModule'
  },
  {
    path: 'make-transaction/:id',
    loadChildren:
      './pages/make-transaction/make-transaction.module#MakeTransactionPageModule'
  },
  {
    path: '**',
    redirectTo: '/tutorial'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}

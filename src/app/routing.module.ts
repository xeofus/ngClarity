/**
 * Created by xeofus on 05.10.2017.
 */
import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {DashboardComponent} from "./pages/dashboard/dashboard.component";
import {SettingsComponent} from "./pages/settings/settings.component";
import {PageNotFoundComponent} from "./pages/page-not-found/page-not-found.component";

const appRoutes: Routes = [
  {
    path: 'dashboard',
    component: DashboardComponent,
  },
  {
    path: 'settings',
    component: SettingsComponent,
  },
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full'
  },
  {
    path: '**',
    component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes
    )
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}

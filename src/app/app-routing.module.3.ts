import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


export const routes : Routes = [
  { path: '', redirectTo: 'contact', pathMatch: 'full'},
  { path: 'crisis', loadChildren: 'app/components/crisis/crisis.module#CrisisModule' },
  { path: 'heroes', loadChildren: 'app/components/hero/hero.module#HeroModule' }
];


@NgModule({
	imports : [ RouterModule.forRoot(routes) ],
	exports : [ RouterModule ]
})
export class AppRoutingModule {}

import { NgModule } from '@angular/core';
import { HeroRoutingModule } from './hero-routing.module';
import { HeroComponent } from './hero.component';
import { HeroDetailComponent } from './hero-detail.component';
import { HeroListComponent } from './hero-list.component';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
	imports: [ HeroRoutingModule, SharedModule ],
	declarations: [
	    HeroComponent, HeroDetailComponent, HeroListComponent
	  ]
})
export class HeroModule {}
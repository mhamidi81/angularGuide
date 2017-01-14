import { Component, OnInit } from '@angular/core';
import { HeroService } from './hero.service';
import { Hero } from './hero.model';

@Component({
	templateUrl : './hero-list.component.html'
})
export class HeroListComponent implements OnInit {
	heroes: Promise<Hero[]>;

	constructor(public heroService : HeroService) {}

	ngOnInit() {
		this.heroes = this.heroService.getHeroes();
	}

}

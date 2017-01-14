import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroService } from './hero.service';
import { Hero } from './hero.model';

@Component({
	 templateUrl : './hero-detail.component.html'
})
export class HeroDetailComponent implements OnInit {
	hero : Hero;

	constructor(private route : ActivatedRoute, public heroService : HeroService) {}

	ngOnInit() {
	    let id = parseInt(this.route.snapshot.params['id'], 10);
	    this.heroService.getHero(id).then(returnedHero => this.hero = returnedHero);
  	}
}

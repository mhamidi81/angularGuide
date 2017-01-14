import { Injectable } from '@angular/core';
import { Hero } from './hero.model';

const HEROES: Hero[] = [
new Hero(11, 'Mr. Nice'),
new Hero(12, 'Narco'),
new Hero(13, 'Bombasto'),
new Hero(14, 'Celeritas'),
new Hero(15, 'Magneta'),
new Hero(16, 'RubberMan')
];

const FETCH_LATENCY = 500;

@Injectable()
export class HeroService {

	getHero(id: number | string) {
		return this.getHeroes()
		.then(heroes => heroes.find(hero => hero.id === +id));
	}

	getHeroes() {
		return new Promise<Hero[]>(resolve => {
			setTimeout(() => { resolve(HEROES); }, FETCH_LATENCY);
		});
	}
}
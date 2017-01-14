import { Component } from '@angular/core';
import { HeroService } from './hero.service';
import { UserService } from '../../services/user.service';

@Component({
	templateUrl : './hero.component.html',
	providers   : [ HeroService ]
})
export class HeroComponent {
	userName = '';
	constructor(userService: UserService) {
		this.userName = userService.username;
	}
}

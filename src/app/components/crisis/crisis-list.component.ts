import { Component, OnInit } from '@angular/core';
import { Crisis } from './crisis.model';
import { CrisisService } from './crisis.service';


@Component({
	templateUrl : './crisis-list.component.html'
})
export class CrisisListComponent implements OnInit {

	crisises: Promise<Crisis[]>;
	constructor(private crisisService : CrisisService) {}

	ngOnInit() {
		this.crisises = this.crisisService.getCrises();
	}
}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Crisis } from './crisis.model';

@Component({
	templateUrl : './crisis-detail.component.html'
})
export class CrisisDetailComponent implements OnInit {

	id : number;
	constructor(private route : ActivatedRoute) {}

	ngOnInit() {
		this.id = parseInt(this.route.snapshot.params['id'], 10);
	}
}
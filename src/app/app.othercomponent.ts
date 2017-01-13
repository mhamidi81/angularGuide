import { Component } from '@angular/core';

@Component({
	selector : 'app-root',
	template : `<h2>
					{{title}}
				<h2>`
})

export class OtherComponent {
	title = 'other component title, hahaha...';
}
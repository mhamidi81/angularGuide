import { Directive, ElementRef } from '@angular/core';

@Directive({
	selector : '[highlight], input'
})
export class HighlightDirective {

	constructor(elref : ElementRef) {
		elref.nativeElement.style.backgroundColor = 'grey';
		console.log(`* AppRoot highlight called for ${elref.nativeElement.tagName}`); 
	}
}

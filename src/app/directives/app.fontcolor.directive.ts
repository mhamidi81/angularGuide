import { Directive, ElementRef } from '@angular/core';

@Directive({
	selector : '[fontcolor]'
})
export class FontColorDirective {
	constructor(elref : ElementRef) {
		elref.nativeElement.style.color = 'red';
		elref.nativeElement.style.fontSize = '36px';
		console.log(`element with tagname: ${elref.nativeElement.tagName} is colored now..`);
	}
}
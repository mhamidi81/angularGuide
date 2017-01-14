import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactService } from '../../services/contact.service';
import { HighlightDirective } from './app.highlight.directive';
import { ContactComponent } from './contact.component';
import { AwesomePipe } from '../../pipes/awesome.pipe';
import { FormsModule } from '@angular/forms';
import { ContactRoutingModule } from './contact-routing.module';



@NgModule({
	declarations : [
		ContactComponent,
		HighlightDirective,
		AwesomePipe
	],
	imports : [ CommonModule, FormsModule, ContactRoutingModule ],
	providers : [ ContactService ]
	/*exports :      [ ContactComponent ],*/
})
export class ContactModule {}

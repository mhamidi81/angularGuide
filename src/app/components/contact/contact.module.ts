import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { ContactService } from '../../services/contact.service';
import { ContactComponent } from './contact.component';
import { ContactRoutingModule } from './contact-routing.module';


@NgModule({
	declarations : [
		ContactComponent
	],
	imports : [ ContactRoutingModule, SharedModule ],
	providers : [ ContactService ]
	/*exports :      [ ContactComponent ],*/
})
export class ContactModule {}

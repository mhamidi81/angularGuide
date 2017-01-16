import { Component, Input } from '@angular/core';
import { UserService } from './user.service';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.css']
})
export class TitleComponent {

	@Input() _subtitle = '';
	@Input() _description = 'default desc!!';
	title = 'Angulaaaar Mooodules...';
	user = 'Guest';

	constructor(userService : UserService) {
		this.user = userService.username;
	}
}

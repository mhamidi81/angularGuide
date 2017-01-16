import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';
import { FormsModule } from '@angular/forms';

import { CrisisListComponent }    from './crisis-list.component';
import { CrisisDetailComponent }  from './crisis-detail.component';
import { CrisisRoutingModule }    from './crisis-routing.module';
import { CrisisService } from './crisis.service';


@NgModule({
  imports:      [ CommonModule, FormsModule, CrisisRoutingModule ],
  declarations: [ CrisisDetailComponent, CrisisListComponent ],
  providers : [ CrisisService ]
})
export class CrisisModule {}

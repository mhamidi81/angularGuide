import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { OtherComponent } from './app.othercomponent';
import { TitleComponent } from './components/title/title.component';
import { HighlightDirective } from './directives/app.highlight.directive';
import { FontColorDirective } from './directives/app.fontcolor.directive';
import { UserService } from './services/user.service';
import { ContactModule } from './components/contact/contact.module';
import { AppRoutingModule } from './app-routing.module.3';


@NgModule({
  declarations: [
    AppComponent,
    OtherComponent,
    HighlightDirective,
    FontColorDirective,
    TitleComponent
  ],
  imports: [
    BrowserModule,
    ContactModule,
    AppRoutingModule,
    HttpModule
  ],
  providers: [ UserService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }

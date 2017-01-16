import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { ContactModule } from './components/contact/contact.module';
import { AppRoutingModule } from './app-routing.module.3';
import { CoreModule } from './core/core.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ContactModule,
    AppRoutingModule,
    CoreModule
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }

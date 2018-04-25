import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import {ConnectionsComponent} from "./connections-component/connections.component";

@NgModule({
  declarations: [
    AppComponent,
    ConnectionsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
		HttpModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

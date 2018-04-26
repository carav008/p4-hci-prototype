import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import {ConnectionsComponent} from "./connections-component/connections.component";
import {FriendsComponent} from "./friends-component/friends.component";
import {SharedModule} from "./shared.module";
import {Routing} from "./app.routes";
import {MATERIAL_COMPATIBILITY_MODE} from "@angular/material";
import {APP_BASE_HREF} from "@angular/common";

@NgModule({
  declarations: [
    AppComponent,
    ConnectionsComponent,
    FriendsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
		HttpModule,
    SharedModule,
    Routing

  ],
  providers: [
    {provide: MATERIAL_COMPATIBILITY_MODE, useValue: true}, {provide: APP_BASE_HREF, useValue: '/'}],
  bootstrap: [AppComponent]
})
export class AppModule { }


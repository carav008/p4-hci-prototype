import {ModuleWithProviders} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {ConnectionsComponent} from "./connections-component/connections.component";
import {FriendsComponent} from "./friends-component/friends.component";
import {HomeComponent} from "./home/home.component"
import { ProfileComponent } from "./profile/profile.component";


export const routes: Routes = [
  {path: '', component: ProfileComponent},
  {path: 'connections', component: ConnectionsComponent},
  {path: 'friends', component: FriendsComponent},
  
];

export const Routing: ModuleWithProviders = RouterModule.forRoot(routes);

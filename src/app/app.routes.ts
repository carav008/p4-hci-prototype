import {ModuleWithProviders} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {ConnectionsComponent} from "./connections-component/connections.component";
import {FriendsComponent} from "./friends-component/friends.component";

export const routes: Routes = [
  {path: 'connections', component: ConnectionsComponent},
  {path: 'friends', component: FriendsComponent}
  // {path: '', component: HomeComponent},
];

export const Routing: ModuleWithProviders = RouterModule.forRoot(routes);

import {ModuleWithProviders} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {ConnectionsComponent} from "./connections-component/connections.component";

export const routes: Routes = [
  {path: 'connections', component: ConnectionsComponent}
];

export const Routing: ModuleWithProviders = RouterModule.forRoot(routes);

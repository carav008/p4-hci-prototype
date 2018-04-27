import { Component } from '@angular/core';
import { Connection } from "./connection";

@Component({
  selector: 'connections',
  templateUrl: './connections.component.html',
  styleUrls: ['./connections.component.scss']
})

export class ConnectionsComponent{

  jeff: Connection = {
    distance: 1,
    name: 'Jeff',
    interests: ['Hockey', 'Skiing']
  };
  dave: Connection = {
    distance: 2.3,
    name: 'Dave',
    interests: ['Fishing', 'Baseball']
  };
  andy: Connection = {
    distance: 0.01,
    name: 'Andy',
    interests: ['Coding', 'Powerpoints']
  };
  connections: Connection[];

  constructor(){
    this.jeff.distance = 2.1;
    this.connections = []
  }

}

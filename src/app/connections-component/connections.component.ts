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
    interests: ['Hockey', 'Skiing'],
    bio: 'Sports are cool!'
  };
  dave: Connection = {
    distance: 2.3,
    name: 'Dave',
    interests: ['Fishing', 'Baseball'],
    bio: "Let's go fishing!"
  };
  andy: Connection = {
    distance: 0.01,
    name: 'Andy',
    interests: ['Coding', 'Powerpoints'],
    bio: "Powerpoints are awesome!"
  };
  brian: Connection = {
    distance: 0.02,
    name: 'Brian',
    interests: ['Coding', 'Angular'],
    bio: "What's up?"
  };
  connections: Connection[];

  constructor(){
    this.connections = [this.jeff,this.dave,this.andy]
  }

}

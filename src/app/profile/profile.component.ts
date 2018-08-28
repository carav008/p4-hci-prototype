import { Component, OnInit} from '@angular/core';
import { SharedService } from '../connections-component/shared.service';
import { Connection } from '../connections-component/connection';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})

export class ProfileComponent implements OnInit{


  connections: Connection[]

  constructor(private service: SharedService) { 
    this.connections = this.service.connect
  }

  ngOnInit(){
  }
  
  cards = [
    { cardID: 0, title: 'Card 1', cols: 2, rows: 1 },
    { cardID: 1, title: 'Card 2', cols: 1, rows: 1 },
    { cardID: 2, title: 'Card 3', cols: 1, rows: 2 },
    { cardID: 3, title: 'Card 4', cols: 1, rows: 1 }
  ];
}

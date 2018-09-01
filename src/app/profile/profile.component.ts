import { Component, OnInit, Input} from '@angular/core';
import { SharedService } from '../connections-component/shared.service';
import { Connection } from '../connections-component/connection';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})

export class ProfileComponent implements OnInit{


  @Input() connectionName: string
  @Input() connectionBio: string
  connections: Connection[]
  constructor(private service: SharedService) { 
    
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

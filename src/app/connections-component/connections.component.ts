import { Component, OnInit} from '@angular/core';
import { Connection } from "./connection";
import {MatDialog} from '@angular/material';
import { SharedService } from './shared.service';

@Component({
  selector: 'connections',
  templateUrl: './connections.component.html',
  styleUrls: ['./connections.component.scss']
})

export class ConnectionsComponent implements OnInit{

  connections: Connection[]
  mobile: boolean
  bool = true
  var = false
  constructor(public dialog: MatDialog, private service: SharedService){
    this.connections = this.service.connect
  }
  

  ngOnInit(){
    this.service.getJSON().subscribe(data=>{
      this.connections = data
      console.log("im getting here" + this.connections)
    })

    if (window.screen.width < 768) { // 768px portrait
      this.mobile = true;
    } 
  }


 
}

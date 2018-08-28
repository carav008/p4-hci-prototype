import { Component, OnInit } from '@angular/core';
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
  constructor(public dialog: MatDialog, private service: SharedService){
    this.connections = this.service.connect
  }
  ngOnInit(){

  }

 
  bool = true
}

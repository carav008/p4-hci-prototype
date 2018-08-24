import { Component } from '@angular/core';
import {MatDialog} from '@angular/material';
import {MessageFriendComponent} from './message-friend.component';

@Component({
  templateUrl: './friends.component.html',
  styleUrls: ['./friends.component.css']
})

export class FriendsComponent{
  public text: string;

  constructor(public dialog: MatDialog) {
    this.text = 'This is a friend';
  }
  interest = [
    {
      name: 'ABBA',
    },
    {
      name: 'Kitchen Remodel',
    }
  ];



  hobbies = [
    {
      name: 'Basketball',
    },
    {
      name: 'Dancing',
    }
  ];

  openDialog(): void {
    const dialogRef = this.dialog.open(MessageFriendComponent, {
      width: '500px',
    });

    dialogRef.afterClosed().subscribe(() => {
      console.log('The dialog was closed');
    });
  }
}

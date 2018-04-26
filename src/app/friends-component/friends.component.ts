import { Component } from '@angular/core';

@Component({
  templateUrl: './friends.component.html',
  styleUrls: ['./friends.component.css']
})

export class FriendsComponent{
  public text: string;

  constructor() {
    this.text = 'This is a friend';
  }
}

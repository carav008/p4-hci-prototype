import {Component, Inject} from '@angular/core';
import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material'

@Component({
  selector: 'app-message-friend.component',
  templateUrl: './message-friend.component.html',
})


export class MessageFriendComponent{
  constructor(public dialogRef: MatDialogRef<MessageFriendComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any){}

  onNoClick(): void {
    this.dialogRef.close();
  }

  alert(): void{
    alert("Your message has been sent!")
  }

}

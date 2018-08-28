import { Injectable } from "@angular/core";
import { Connection } from "./connection"

@Injectable()
export class SharedService{

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

      connect: Connection[]
    

      constructor(){
        this.connect = [this.jeff,this.dave,this.andy, this.brian]
      }

      bool = true
      addFriend(friend: string):boolean{
        console.log(friend + " was added! ")
        this.bool = !this.bool

        return this.bool
      } 

        
    
}
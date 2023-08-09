import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  //set new value 
  messages: string[] = []

  //method for add message
  add(message: string){
    this.messages.push(message)
  }

  //method for clear messages
  clear(){
    this.messages = []
  }
}

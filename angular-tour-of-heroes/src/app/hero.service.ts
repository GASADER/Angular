import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { HEROES } from './mock-data';
import { Observable, of } from 'rxjs';
import { MessageService } from './messages.service';
@Injectable({
  //select locations file
  providedIn: 'root',
})
export class HeroService {

  constructor(private messageService: MessageService) {}

  //method for count call service
  getHeroes(): Observable<Hero[]> {
    const heroes = of(HEROES);
    this.messageService.add('HeroService: fetch heroes')
    return heroes;
  }
}

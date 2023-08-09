import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { HEROES } from './mock-data';
import { Observable, of } from 'rxjs';

@Injectable({
  //select locations file
  providedIn: 'root',
})
export class HeroService {
  constructor() {}
  //method for count call service
  getHeroes(): Observable<Hero[]> {
    const heroes = of(HEROES);
    return heroes;
  }
}

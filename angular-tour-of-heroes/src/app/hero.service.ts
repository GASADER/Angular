import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { HEROES } from './mock-data';

@Injectable({
  //select 
  providedIn: 'root'
})
export class HeroService {

  constructor() { }
  getHeroes(): Hero[]{
    return HEROES
  }
}

import { Component } from '@angular/core';
import { Hero } from '../hero';
import { HEROES } from '../mock-data';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css'],
})
export class HeroesComponent {
  //set new value from mock data
  heroes = HEROES;

  //set empty object for instead of selected value
  //Initialize = undefined  
  selectedHero?: Hero;

  //add event binding (add functions)
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
}

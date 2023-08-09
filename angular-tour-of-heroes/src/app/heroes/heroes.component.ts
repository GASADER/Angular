import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css'],
})
export class HeroesComponent implements OnInit {
  //set new value
  heroes: Hero[] = [];

  //set empty object for instead of selected value
  //Initialize = undefined
  selectedHero?: Hero;

  //create parameter for HeroService instance
  constructor(private heroService: HeroService) {}

  //method for call service
  getHero(): void {
    //call service for pull data to value in class
    this.heroService.getHeroes().subscribe((heroes) => (this.heroes = heroes));
  }

  //hook method for call functions (use lifecycle hook like a useEffect in React)
  ngOnInit(): void {
    this.getHero();
  }

  //add event binding (add functions)
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
}

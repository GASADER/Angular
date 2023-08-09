import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';
import { MessageService } from '../messages.service';
@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css'],
})
export class HeroesComponent implements OnInit {
  //set new value
  heroes: Hero[] = [];

  //create parameter for HeroService instance
  constructor(private heroService: HeroService,private messageService: MessageService) {}

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
    this.messageService.add(`HeroesComponent: Selected hero id=${hero.id}`)
  }

  add(name: string): void{
    name = name.trim()
    if(!name){return}
    this.heroService.addHero({name} as Hero)
    .subscribe(hero => {
      this.heroes.push(hero)
    })
  }

  delete(hero: Hero): void{
    this.heroes = this.heroes.filter(h => h! == hero )
    this.heroService.deleteHero(hero.id).subscribe()
  }
}

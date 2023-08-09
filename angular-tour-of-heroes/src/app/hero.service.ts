import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { HEROES } from './mock-data';
import { Observable, of } from 'rxjs';
import { catchError,map,tap } from 'rxjs/operators';

import { HttpClient,HttpHeaders } from '@angular/common/http';
import { MessageService } from './messages.service';
@Injectable({
  //select locations file
  providedIn: 'root',
})
export class HeroService {

  //set route for api
  private heroesUrl ='api/heroes'

  constructor(
    private http: HttpClient,
    private messageService: MessageService
    ) {}

  //service for call all data
  getHeroes(): Observable<Hero[]> {
    return this.http.get<Hero[]>(this.heroesUrl)
    .pipe(
      tap(_ => this.log('fetched heroes')),
      catchError(this.handleError<Hero[]>('getHeroes',[]))
    )
  }


  getHero(id:Number): Observable<Hero>{
    const hero = HEROES.find(h => h.id === id)!
    this.messageService.add(`HeroService: fetched hero id=${id}`)
    return of(hero)
  }

  private log(messages: string){
    this.messageService.add(`HeroService: ${messages}`)
  }

  private handleError<T>(operation= 'operation',result?: T){
    return (error: any): Observable<T> => {
      console.error(error);
      this.log(`${operation} failed: ${error.messages}`)
      return of(result as T)
    }
  }
}

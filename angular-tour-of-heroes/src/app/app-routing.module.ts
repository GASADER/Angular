import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'
import { HeroesComponent } from './heroes/heroes.component';

const router: Routes =[
  //create path to call component
  {path:'heroes', component: HeroesComponent}
]


@NgModule({
  //setting for base navigate router
  imports: [
    RouterModule.forRoot(router)
  ],
  exports:[RouterModule]
})
export class AppRoutingModule { }

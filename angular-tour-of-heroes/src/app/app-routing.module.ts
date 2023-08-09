import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'
import { HeroesComponent } from './heroes/heroes.component';

const router: Routes =[
  {path:'heroes', component: HeroesComponent}
]


@NgModule({
  
  imports: [
    RouterModule.forRoot(router)
  ],
  exports:[RouterModule]
})
export class AppRoutingModule { }

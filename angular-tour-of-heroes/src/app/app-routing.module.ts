import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'
import { HeroesComponent } from './heroes/heroes.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';

const router: Routes =[
  {path:'', redirectTo:'dashboard', pathMatch:'full'},

  //create path to call component
  {path:'heroes', component: HeroesComponent},
  {path:'dashboard', component: DashboardComponent},
  {path:'detail/:id', component: HeroDetailComponent}
]


@NgModule({
  //setting for base navigate router
  imports: [
    RouterModule.forRoot(router)
  ],
  exports:[RouterModule]
})
export class AppRoutingModule { }

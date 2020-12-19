import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { ConsultActiviteComponent } from './consult-activite/consult-activite.component';

const routes: Routes = [
  {
    path: '', 
    component: HomeComponent
  }, 
  {
    path:'index.html',
    component: HomeComponent
  },
  {
    path:'consultAct',
    component: ConsultActiviteComponent
  },
  {
    path:'consultAct/:id',
    component: ConsultActiviteComponent
  },
  {
    path:'consultAct/:id/:id2',
    component: ConsultActiviteComponent
  },
  {
    path:'about',
    component: AboutComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {GameListComponent} from './components/game-list/game-list.component';
import {GameFormComponent} from './components/game-form/game-form.component';
import {EditgameComponent} from './components/editgame/editgame.component';
import { GamesService } from './services/games.service';
import { from } from 'rxjs';

const routes: Routes = [
  {
    // parametro path indica el nombre de la ruta 
    path:'',
    redirectTo:'/games',
    pathMatch:'full'
  },
  {path:'games',
  component:GameListComponent 
  },
  {
    path:'games/add',
    component:GameFormComponent
  },
  {
    path:'games/edit/:id',
    component:EditgameComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

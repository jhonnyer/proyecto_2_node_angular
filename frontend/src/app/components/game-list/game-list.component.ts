import { Component, HostBinding, OnInit } from '@angular/core';
import { from } from 'rxjs';
import {GamesService} from '../../services/games.service';
// ActiveRoute permite verificar el parametro que se esta recibiendo en la consulta, para editar
import{ ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-game-list',
  templateUrl: './game-list.component.html',
  styleUrls: ['./game-list.component.css']
})
export class GameListComponent implements OnInit {
  @HostBinding('class') classes="row";
  games:any=[];
  constructor(private gamesService:GamesService, private router: Router) { }

  ngOnInit(): void {
    this.getGames();
  }

  getGames(){
    this.gamesService.getGames().subscribe(
      res=>{
        this.games=res,
        res=>console.log(res)
      },
        err=>console.error(err)
    );
  }

  deleteGame(id: string){
    // console.log(id);
    this.gamesService.deleteGame(id).subscribe(
      res=>{
        console.log(res);
        this.getGames();
        this.router.navigate(['/games']);
      },
      err=>console.log(err)
    )
  }
  // Probar si esta recuperando el id 
  // editGame(id:string){
  //   console.log(id);
  // }
}

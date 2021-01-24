import { Component, OnInit, HostBinding } from '@angular/core';
import { from } from 'rxjs';
// Importar modelo 
import {Game} from 'src/app/models/Game';
// importar servicio API 
import {GamesService} from '../../services/games.service';
// Importar router para enrutar a otras vistas 
// ActiveRoute permite verificar el parametro que se esta recibiendo en la consulta, para editar
import{ ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-game-form',
  templateUrl: './game-form.component.html',
  styleUrls: ['./game-form.component.css']
})
export class GameFormComponent implements OnInit {
  // Guarda el div principal en un row 
  @HostBinding('class') classes='row';
  // Importo el modelo 
  game:Game={
    id:0,
    title:'',
    descripcion:'',
    image:'',
    create_ad: new Date()
  };


  // formulario de validacion de datos si un juego esta creado para editar 
  // si el edit esta en falso, se puede guardar, si esta en true se edita. ya esta creado
  edit: boolean=false;
  
  constructor(private gameService: GamesService, private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit(){
    // recupera el id del juego a actualizar 
    const params = this.activatedRoute.snapshot.params;
    console.log(params)
    if (params.id){
      this.gameService.getGame(params.id)
      .subscribe(
        res=>{
          console.log(res);
          this.game=res;
          this.edit=true;
        },
        err=>console.error(err)
      )
    }
  }

  saveNewGame(){
    // console.log(this.game);
    // Elimina los datos de creacion en el formulario porque la base de datos los crea automaticamente 
    delete this.game.create_ad;
    delete this.game.id;
    this.gameService.saveGame(this.game)
    .subscribe(
      res=>{
        console.log(res);
        console.log(this.game);
        // Cuando guarde un juego envia a la vista games
        this.router.navigate(['/games']);
      },
      err=>console.error(err)
    );
  }

  // updateGame(){
  //   // verificar objeto a actualizar 
  //   console.log(this.game);
  //   // la fecha de creación no se actualiza 
  //   delete this.game.created_at;
  //   this.gameService.updateGame(this.game.id, this.game)
  //   .subscribe(
  //     res=>{
  //       console.log(res);
  //       // console.log(this.edit);
  //       this.router.navigate(['/games']);
  //     },
  //     err=>console.log(err)
  //   )
  // }

}

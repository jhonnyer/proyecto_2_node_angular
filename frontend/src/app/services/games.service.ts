import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

// importar la interfaz del modelo 
import {Game} from '../models/Game';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GamesService {
  API_URI='http://localhost:3500/api'

  constructor(private http:HttpClient) { }

  // consultar juegos disponibles 
  getGames(){
    // return this.http.get('http://localhost:3000/api/games');
    return this.http.get(this.API_URI+'/games');
  }
  // Consultar un juego por un id 
  getGame(id:string){
    return this.http.get(this.API_URI+'/games/'+id);
  }

  // guardar un juego, debe cumplir con la interfaz del modelo
  saveGame(game:Game){
    return this.http.post(this.API_URI+'/games',game);
  }
  // Eliminar juego 
  deleteGame(id:string){
    return this.http.delete(this.API_URI+'/games/'+id);
  }
  // Actualizar juego 
  // updateGame(id:string|number, updateGame:Game){
  // updateGame(id:string|number, updateGame:Game):Observable<Game>{
  //   // updateGame
  //   // return this.http.put(this.API_URI+'/games/'+id, updateGame);
  //   return this.http.put(this.API_URI+'/games/${id})', updateGame);
  // }

  updateGame(id:string|number, updateGame:Game):Observable<Game>{
    return this.http.put(this.API_URI+'/games/'+id,updateGame);
  // updateGame(game:Game){
  //   return this.http.post(this.API_URI+'/games',game);
  }
}

// <Game>
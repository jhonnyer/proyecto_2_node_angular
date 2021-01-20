import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// Importar modulo HTTP 
import { HttpClientModule } from '@angular/common/http';
//Guardar datos de formulario 
import {FormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavegacionComponent } from './components/navegacion/navegacion.component';
import { GameFormComponent } from './components/game-form/game-form.component';
import { GameListComponent } from './components/game-list/game-list.component';
// Importar servicios para conexión con la base de datos 
import {GamesService} from './services/games.service';
import { from } from 'rxjs';
import { EditgameComponent } from './components/editgame/editgame.component';

@NgModule({
  declarations: [
    AppComponent,
    NavegacionComponent,
    GameFormComponent,
    GameListComponent,
    EditgameComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    GamesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

// console.log("Servidor")
import express, {Application, application} from 'express';
import morgan from 'morgan';
import cors from 'cors';

// Rutas 
import indexRoutes from './routes/indexRoutes';
import gamesRoutes from './routes/gamesRouter';

class Server{
    public app: Application;
    // Inicializador express 
    constructor(){
        this.app=express();
        this.config();
        this.routes();
    }
    // metodo que permite configurar propiedad app, no devuelve nada tipo vacio 
    config():void{
        this.app.set('port', process.env.PORT || 3500);
        // permite ver las peticiones a la api y la BD 
        this.app.use(morgan('dev'));
        this.app.use(cors());
        this.app.use(express.json());
        // permite enviar datos desde un formulario a la app 
        this.app.use(express.urlencoded({extended:false}));
    }
    routes():void{
        this.app.use('/', indexRoutes);
        this.app.use('/api/games/',gamesRoutes);
    }
    start():void{
        this.app.listen(this.app.get('port'),()=>{
            console.log('Servidor escuchando puerto', this.app.get('port'));
        });
    }

}

const server = new Server();
server.start();
import{Request, Response} from 'express';
import pool from '../database';
// import { catchError } from 'rxjs/operators';
// CJS

class GamesController{
    public async list(req: Request, res: Response){
        await pool.query('SELECT * FROM game', function (err, game, fields)
        // res.json(CircularJSON.stringify(games));
        {
            if(err) throw err;
            res.json(game);
            console.log(game);
        })};
        // const games=await {
        //     "Persona":
        // [  {"name": "jhonnyer",
        //         "ciudad":"Popayan"
        //     },
        //     {"Años":"20",
        //      "Departamento":"Cauca1"}
        // ]
        // };
        // res.json(games);
        // console.log(req.body);

        // tipo any porque a veces esta volviendo una promesa, y a veces un codigo de estado 
    public async getOne(req: Request, res: Response):Promise<any>{
        const {id}=req.params;
        // const games = await pool.query('SELECT * FROM game WHERE id=?',[id]);
        await pool.query('SELECT * FROM game WHERE id=?',[id], function(err, games, fields)
        {
            if(err) throw err;
            // Si hay un juego en el array games 
            if (games.length>0){
                // devolver el indice cero del objeto buscado 
                return res.json(games[0]);
                console.log(games);
                // res.json({text:"Juego Encontrado"});
            }
            res.status(404).json({text:'El juego no existe'});            
        })};
        
    // res.json({text: 'Este es el juego '+req.params.id});
    public async create (req:Request, res:Response): Promise<void>{
        // console.log(req.body);
        await pool.query('INSERT INTO game set ?',[req.body]);
        res.json({message:'El juego fue creado'});
    }
    public async delete (req:Request, res:Response): Promise<void>{
        // res.json({tex:'Eliminando un juego '+req.params.id});
        const{id}=req.params;
        await pool.query('DELETE FROM game where id=?',[id]);
        res.json({message:"El juego fue eliminado"});
    }
    public async update (req:Request, res:Response):Promise<void>{
        // res.json({tex:'actualizando un juego '+req.params.id});
        console.log('peticiopn frontend')
        console.log(req.body);
        const{id}=req.params;
        await pool.query('UPDATE game set ? where id=?',[req.body, id]);
        res.json({message:"El juego fue actualizado"});
    }
}

const gamesController = new GamesController();
export default gamesController;
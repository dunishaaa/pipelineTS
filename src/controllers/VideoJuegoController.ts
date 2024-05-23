import { Request,Response } from "express";
import AbstractController from "./AbstractController";
import db from "../models";

class VideoJuegoController extends AbstractController{
    //Singleton
    //Atributos de clase
    private static _instance: VideoJuegoController;
    public static get instance():VideoJuegoController{
        if(this._instance){
            return this._instance;
        }
        this._instance = new VideoJuegoController("videojuego");
        return this._instance;
    }   

    protected initializeRoutes(): void {
        this.router.get("/test",this.getTest.bind(this));
        //
        this.router.get("/consultar",this.getConsultar.bind(this));
        this.router.post("/crear",this.postCrear.bind(this));
        
    }

    private async getConsultar(req:Request,res:Response){
        try{
            console.log("Consultar videojuego");
            let videojuego = await db["VideoJuego"].findAll();
            res.status(200).json(videojuego);
        }catch(err){
            console.error(err);
            res.status(500).send("Error al consultar videojuegos");
        }
    }

    private async postCrear(req: Request, res: Response){
        try{
            console.log(req.body);
            await db.VideoJuego.create(req.body);
            console.log("Videojuego creado")
            res.status(200).send("Videojuego creado");
        }catch(err){
            console.error(err);
            res.status(500).send("Error al crear videojuego");
        }
    }
    private async getTest(req: Request, res: Response){
        try{
            console.log("VideojuegoController works");
            res.status(200).send("VideojuegoController works");
        }catch(err){
            console.error(err);
            res.status(500).send("Error en VideojuegoController");
        }
    }
}

export default VideoJuegoController;
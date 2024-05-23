import { Request,Response } from "express";
import AbstractController from "./AbstractController";
// import db from "../models";
import MascotaModel from "../modelsNOSQL/MascotaNOSQL";

class MascotaController extends AbstractController{
    //Singleton
    //Atributos de clase
    private static _instance: MascotaController;
    public static get instance():MascotaController{
        if(this._instance){
            return this._instance;
        }
        this._instance = new MascotaController("mascota");
        return this._instance;
    }   

    protected initializeRoutes(): void {
        this.router.get("/test",this.getTest.bind(this));
        //
        this.router.post("/crear", this.postCrearMascota.bind(this));
        this.router.get("/consultar",this.getConsultarMascota.bind(this));
      
    }
    private async getConsultarMascota(req:Request,res:Response){
        try{
            const producto = await MascotaModel.scan().exec().promise();
            res.status(200).send(producto[0].Items);
            console.log(producto);
        }catch(err){
            console.error(err);
            res.status(500).send("Error al consultar mascotas");
        }
    }

    private async postCrearMascota(req: Request, res: Response){
        try{    
            console.log(req.body);
            await MascotaModel.create(req.body);
            console.log("Mascota creada");
            res.status(200).send("Mascota creada");
        }catch(err){
            console.log(err);
            res.status(500).send("Error al crear mascota");
        }
    }

    private async getTest(req: Request, res: Response){
        try{
            console.log("MascotaController works");
            res.status(200).send("MascotaController works");
        }catch(err){
            console.error(err);
            res.status(500).send("Error en MascotaController");
        }
    }
}

export default MascotaController;
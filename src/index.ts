import Server from "./providers/Server";
import {PORT,NODE_ENV} from './config';
import express from 'express';
import VideoJuegoController from "./controllers/VideoJuegoController";
import MascotaController from "./controllers/MascotaController";

const server = new Server({
    port:PORT,
    env:NODE_ENV,
    middlewares:[
        express.json(),
        express.urlencoded({extended:true})
    ],
    controllers:[
        VideoJuegoController.instance,
        MascotaController.instance
    
    ]
    
});

server.init();
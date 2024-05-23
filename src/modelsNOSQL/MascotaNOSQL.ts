import dynamodb from "../services/dynamodbService";
import joi from "joi";
import {PREFIX_NAME} from "../config";

const MascotaModel = dynamodb.define('mascota',{
    hashKey:'MascotaID',
    timestamps:false,
    schema:{
        MascotaID:dynamodb.types.uuid(),
        nombre:joi.string(),
        edad:joi.number(),
        raza:joi.string()
    },
    tableName:`Mascota${PREFIX_NAME}`
})

dynamodb.createTables((err)=>{
    if(err)
        return console.log(err);
    console.log("Tablas creadas");
})

export default MascotaModel;
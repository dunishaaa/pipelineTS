import { Model, Sequelize } from "sequelize";

interface VideoJuegoModel {
    id: number;
    nombre: string;
    precio: number;
    genero: string;
}

module.exports = (sequelize:any,DataTypes:any) => {
    class VideoJuego extends Model<VideoJuegoModel> implements VideoJuegoModel {
        public id!: number;
        public nombre!: string;
        public precio!: number;
        public genero!: string;

        static associate(models:any) {
            // define association here
        }
    }
    VideoJuego.init({
        id:{
            type:DataTypes.INTEGER,
            allowNull:false,
            primaryKey:true,
            autoIncrement:true
        },
        nombre:{
            type:DataTypes.STRING,
            allowNull:false
        },
        precio:{
            type:DataTypes.FLOAT,
            allowNull:false        
        },
        genero: {
            type:DataTypes.STRING,
            allowNull:false,
        }
    },{
        sequelize,
        modelName:'VideoJuego'
    });
    return VideoJuego;
};
        
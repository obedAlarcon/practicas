import express, { Application }  from "express";
import routesPersona from "../routes/persona.routes";
import connection from "../db/connection";

class Server{


    private app:Application;
    private port:string;

    constructor(){

        this.app=express();
        this.port=process.env.PORT || '3000';

        this.listen();
        this.middlewares();
        this.routes();
        this.conectarDB();
       

    }

     listen(){
     

        this.app.listen(this.port,()=>{
      console.log("esta aplicacion e sta corriendo por el puerto  " + this.port);

        })

     }
     
     middlewares(){
      //parceo del body
      this.app.use(express.json());


     }

     routes(){
    

      this.app.use('/api/personas',routesPersona);


     }
conectarDB(){
connection.connect((error)=>{
  if(error) throw error;

  console.log("Conecion a la base de datos exitosa");
})
}



}
export default Server;
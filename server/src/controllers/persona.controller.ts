import connection from "../db/connection";
import {Request, Response} from "express"
//obtenemos las personas

export const getPersonas=(req:Request, res:Response)=>{

    connection.query('SELECT * FROM personas',(err, data)=>{
        if(err) throw err;
        res.json(data)
    })
  
//obtenemos la persona 

}
export const getPersona=(req:Request, res:Response)=>{
  const {id}=req.params;
  connection.query('SELECT * FROM personas where id = ?' ,id, (err, data)=>{
    if(err) throw err;
    res.json(data[0])
  })
    
//se borra la persona

}
export const deletePersona=(req:Request, res:Response)=>{
    const {id}=req.params;
     connection.query('delete from personas where id=?',id, (err,data)=>{
        if(err) throw err;
        res.json({
            msg:"persona eliminada con exito"
        })
     })
      
  
  //se muestra la persona 
  }

  export const postPersona=(req:Request, res:Response)=>{
  const { body } = req;

  connection.query('INSERT INTO personas set ? ', [body],(err, data)=>{
    if(err) throw err;

    res.json({
        msg:"persona guarada conexito"
    })

  })
   
      
  
  //update de la persona 
  }
  export const putPersona=(req:Request, res:Response)=>{
    const {body} =req;
    const {id}=req.params;
      connection.query('UPDATE personas set ? WHERE id= ?',[body, id], (err, data)=>{
            if(err) throw err;
        res.json({
            msg:"persona actualizada con exito"
        })
      })
  
  
  }
import express, { Request, Response } from 'express';
import { CreateContactUseCase } from "../../../domain/interfaces/use-cases/contact/crate-contact-use-case";

export default function ContactsRouter(createContactUseCase:CreateContactUseCase){
   
  const router = express.Router()


  router.post('/',async(req:Request,res:Response)=>{
       
     try{

        const contact = await createContactUseCase.execute(req.body)

        

     }catch(err){

      
     }
    
  })
  
}
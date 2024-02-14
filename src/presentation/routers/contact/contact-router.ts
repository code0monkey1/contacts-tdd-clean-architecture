import express, { Request, Response } from 'express';
import { ContactResult } from '../../../domain/entities/ContactResult';
import { CreateContactUseCase } from "../../../domain/interfaces/use-cases/contact/crate-contact-use-case";

export default function ContactRouter(createContactUseCase:CreateContactUseCase){
   
  const router = express.Router()


  router.post('/',async(req:Request,res:Response)=>{
       
     try{

        const contactResult:ContactResult = await createContactUseCase.execute(req.body)

        console.log(" ✅ New Contact Created")

        res.json(contactResult)

     }catch(err){

        let message=''

        if (err instanceof Error){
            message+=err.message
        }
        console.log("Contact Created :no_entry_sign:")
        res.status(500).json({error:`error fetching data : ${message}`})
     
     }
    
  })

  return router
  
}
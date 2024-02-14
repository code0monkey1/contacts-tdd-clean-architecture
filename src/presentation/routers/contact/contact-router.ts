import express, { Request, Response } from 'express';
import { Contact } from '../../../domain/entities/Contact';
import { ContactResult } from '../../../domain/entities/ContactResult';
import { CreateContactUseCase } from "../../../domain/interfaces/use-cases/contact/crate-contact-use-case";
import { GetContactUseCase } from '../../../domain/interfaces/use-cases/contact/get-contact-use-case';

export default function ContactRouter(
   createContactUseCase:CreateContactUseCase,
   getContactUseCase:GetContactUseCase
   ){
   
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

    router.get('/:id',async(req:Request,res:Response)=>{
       
     try{
       
       const {id} =req.params

       console.log("The id is",id)

       if(!id)
         throw("id was not given : "+id)
       
        const contact = await getContactUseCase.execute(id)

        console.log(" ✅  Contact Found",JSON.stringify(contact))

        res.json(contact)

     }catch(err){

        let message=''

        if (err instanceof Error){
            message+=err.message
        }
        
        console.log(" ❌ Contact not found ")

        res.status(500).json({error:`Error getting contact : ${message}`})
     
     }
    
  })

  return router
  
}
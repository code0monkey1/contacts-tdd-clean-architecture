import { Contact } from "../../../entities/Contact";
import { ContactResponseModel } from "../../../models";


export interface ContactRepository{
    
     createContact(contact:Contact):Promise<boolean>
     getContact(id:string):Promise<ContactResponseModel>

   
}
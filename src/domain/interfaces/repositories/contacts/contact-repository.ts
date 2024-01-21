
import { Contact } from "../../../entities/Contact";
import { ContactResult } from "../../../entities/ContactResponse";
import { ContactResponseModel, ContactUpdateModel } from "../../../models";


export interface ContactRepository{
    
     createContact(contact:Contact):Promise<ContactResult>
     getContact(id:string):Promise<ContactResult>
     getContacts():Promise<ContactResult[]>
     updateContact(id:string,data:ContactUpdateModel):Promise<ContactResult>
     deleteContact(id:string):Promise<ContactResult>
   
}
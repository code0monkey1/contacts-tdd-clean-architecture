import { Contact } from "../../../entities/Contact";
import { ContactResponseModel, ContactUpdateModel } from "../../../models";


export interface ContactRepository{
    
     createContact(contact:Contact):Promise<boolean>
     getContact(id:string):Promise<ContactResponseModel>
     updateContact(id:string,data:ContactUpdateModel):Promise<boolean>
     deleteContact(id:string):Promise<boolean>

   
}
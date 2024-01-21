import { Contact } from "../../../../domain/entities/Contact";
import { ContactResult } from "../../../../domain/entities/ContactResponse";
import { ContactUpdateModel } from '../../../../domain/models/index';

export interface ContactDataSource {
     
      create(contact:Contact):Promise<ContactResult>
      getOne(id:string):Promise<ContactResult>
      getAll():Promise<ContactResult>
      deleteOne(id:string):Promise<ContactResult>
      updateOne(id:string,data:ContactUpdateModel):Promise<ContactResult>

}
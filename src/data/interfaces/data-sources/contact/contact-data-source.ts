import { Contact } from "../../../../domain/entities/Contact";
import { ContactResult } from "../../../../domain/entities/ContactResult";
import { ContactUpdateModel } from '../../../../domain/models/index';

export interface ContactDataSource {
     
      create(contact:Contact):Promise<ContactResult>
      getOne(id:string):Promise<ContactResult>
      getAll():Promise<ContactResult>
      deleteOne(id:string):Promise<void>
      updateOne(id:string,data:ContactUpdateModel):Promise<ContactResult>

}
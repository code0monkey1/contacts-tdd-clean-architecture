import { Contact } from "../../../domain/entities/Contact";
import { ContactResponseModel } from "../../../domain/models";
import { ContactUpdateModel } from '../../../domain/models/index';

export interface ContactDataSource {
     
      create(contact:Contact):Promise<boolean>
      getOne(id:string):Promise<ContactResponseModel>
      getAll():Promise<ContactResponseModel[]>
      deleteOne(id:string):Promise<boolean>
      updateOne(id:string,data:ContactUpdateModel):Promise<boolean>

}
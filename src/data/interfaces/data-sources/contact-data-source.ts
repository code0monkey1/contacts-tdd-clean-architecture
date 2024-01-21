import { Contact } from "../../../domain/entities/Contact";
import { ContactResponseModel } from "../../../domain/models";
import { ContactUpdateModel } from '../../../domain/models/index';

export interface ContactDataSource {
     
      create(contact:Contact):boolean
      getOne(id:string):Promise<ContactResponseModel>
      getAll():Promise<ContactResponseModel[]>
      deleteOne(id:string):boolean
      updateOne(id:string,data:ContactUpdateModel):boolean

}
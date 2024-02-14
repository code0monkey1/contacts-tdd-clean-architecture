import { Contact } from "../../../entities/Contact";
import { ContactResult } from "../../../entities/ContactResult";

export interface GetContactUseCase{
   execute(id:string):Promise<ContactResult>
}
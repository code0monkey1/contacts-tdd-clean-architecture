import { Contact } from "../../../entities/Contact";
import { ContactResult } from "../../../entities/ContactResponse";

export interface CreateContactUseCase{
   execute(Contact:Contact):Promise<ContactResult>
}
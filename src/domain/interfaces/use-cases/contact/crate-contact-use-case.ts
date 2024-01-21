import { Contact } from "../../../entities/Contact";
import { ContactResult } from "../../../entities/ContactResult";

export interface CreateContactUseCase{
   execute(Contact:Contact):Promise<ContactResult>
}
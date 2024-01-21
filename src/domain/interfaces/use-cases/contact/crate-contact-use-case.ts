import { Contact } from "../../../entities/Contact";

export interface CreateContactUseCase{
   execute(Contact:Contact):Promise<Boolean>
}
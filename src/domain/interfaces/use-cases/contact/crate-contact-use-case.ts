import { Contact } from "../../../entities/Contact";
import { ContactResult } from "../../../entities/ContactResult";
import { UseCase } from "../../UseCase";

export interface CreateContactUseCase extends UseCase<CreateContactUseCase.request,CreateContactUseCase.response>{
   execute(contact:CreateContactUseCase.request):Promise<CreateContactUseCase.response>
}

export namespace CreateContactUseCase{
   export type request= Contact
   export type response = ContactResult
}
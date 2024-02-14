import { ContactRepository } from '../interfaces/repositories/contacts/contact-repository';
import { DeleteContactUseCase } from "../interfaces/use-cases/contact/delete-contact-use-case";

export class DeleteContact implements DeleteContactUseCase{

  constructor(private contactRepository:ContactRepository){}
 async execute(contactId: DeleteContactUseCase.request): Promise<DeleteContactUseCase.response> {
         return  this.contactRepository.deleteContact(contactId)
  }
  
}
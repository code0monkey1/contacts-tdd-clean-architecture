import { ContactRepository } from "../interfaces/repositories/contacts/contact-repository";
import { GetContactUseCase } from "../interfaces/use-cases/contact/get-contact-use-case";


export class GetContact implements GetContactUseCase{

  constructor(private contactRepository:ContactRepository){}
  async execute(contactId: GetContactUseCase.request):     Promise<GetContactUseCase.response>{

     return await this.contactRepository.getContact(contactId)

  }
  
}
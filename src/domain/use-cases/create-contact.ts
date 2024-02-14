import { ContactRepository } from "../interfaces/repositories/contacts/contact-repository";
import { CreateContactUseCase } from "../interfaces/use-cases/contact/crate-contact-use-case";


export class CreateContact implements CreateContactUseCase{

  constructor(private contactRepository:ContactRepository){}
  async execute(contact: CreateContactUseCase.request):     Promise<CreateContactUseCase.response>{

     const createdContact=await this.contactRepository.createContact(contact)

     return createdContact
  }
  
}
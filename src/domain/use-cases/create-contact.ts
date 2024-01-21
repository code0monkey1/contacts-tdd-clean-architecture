import { Contact } from "../entities/Contact";
import { ContactRepository } from "../interfaces/repositories/contacts/contact-repository";
import { CreateContactUseCase } from "../interfaces/use-cases/contact/crate-contact-use-case";


export class CreateContact implements CreateContactUseCase{

  constructor(private contactRepository:ContactRepository){}
  async execute(contact: Contact): Promise<Boolean>{
     return this.contactRepository.createContact(contact)
  }
  
}
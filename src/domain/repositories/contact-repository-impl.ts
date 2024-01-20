import { Contact } from "../entities/Contact";
import { ContactRepository } from "../interfaces/repositories/contacts/contact-repository";

export class ContactRepositoryImpl implements ContactRepository{
  createContact(contact: Contact): Promise<boolean> {
    throw new Error("Method not implemented.");
  }

   
}
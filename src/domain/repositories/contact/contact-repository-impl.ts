import { ContactDataSource } from "../../../data/interfaces/data-sources/contact/contact-data-source";
import { Contact } from "../../entities/Contact";
import { ContactResult } from "../../entities/ContactResult";
import { ContactRepository } from "../../interfaces/repositories/contacts/contact-repository";

export class ContactRepositoryImpl implements ContactRepository{

  constructor(private contactsDataSource:ContactDataSource){}
  createContact(contact: Contact): Promise<ContactResult> {
    console.log("create contact reached")
    return this.contactsDataSource.create(contact)
  }
  getContact(id: string): Promise<ContactResult> {
    throw new Error("Method not implemented.");
  }
  getContacts(): Promise<ContactResult[]> {
    throw new Error("Method not implemented.");
  }
  updateContact(id: string, data: Partial<Contact>): Promise<ContactResult> {
    throw new Error("Method not implemented.");
  }
  deleteContact(id: string): Promise<ContactResult> {
    throw new Error("Method not implemented.");
  }

   
}
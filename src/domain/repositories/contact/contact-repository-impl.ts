import { ContactDataSource } from "../../../data/interfaces/data-sources/contact/contact-data-source";
import { Contact } from "../../entities/Contact";
import { ContactResult } from "../../entities/ContactResponse";
import { ContactRepository } from "../../interfaces/repositories/contacts/contact-repository";
import { ContactResponseModel } from "../../models";

export class ContactRepositoryImpl implements ContactRepository{

  constructor(private contactsDataSource:ContactDataSource){}
  createContact(contact: Contact): Promise<ContactResult> {
    throw new Error("Method not implemented.");
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
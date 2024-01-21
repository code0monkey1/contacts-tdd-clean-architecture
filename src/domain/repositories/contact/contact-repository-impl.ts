import { ContactDataSource } from "../../../data/interfaces/data-sources/contact-data-source";
import { Contact } from "../../entities/Contact";
import { ContactRepository } from "../../interfaces/repositories/contacts/contact-repository";
import { ContactResponseModel } from "../../models";

export class ContactRepositoryImpl implements ContactRepository{

  constructor(private contactsDataSource:ContactDataSource){}
  getContact(id: string): Promise<ContactResponseModel> {
    throw new Error("Method not implemented.");
  }
  getContacts(): Promise<ContactRepository[]> {
    throw new Error("Method not implemented.");
  }
  updateContact(id: string, data: Partial<Contact>): Promise<boolean> {
    throw new Error("Method not implemented.");
  }
  deleteContact(id: string): Promise<boolean> {
    throw new Error("Method not implemented.");
  }
  createContact(contact: Contact): Promise<boolean> {
    throw new Error("Method not implemented.");
  }

   
}
import { ContactDataSource } from "../../../data/interfaces/data-sources/contact/contact-data-source";
import { Contact } from "../../entities/Contact";
import { ContactResult } from "../../entities/ContactResult";
import { ContactRepository } from "../../interfaces/repositories/contacts/contact-repository";

export class ContactRepositoryImpl implements ContactRepository {

  constructor(private contactsDataSource: ContactDataSource) { }
  async createContact(contact: Contact): Promise<ContactResult> {

    return await this.contactsDataSource.create(contact)

  }
  async getContact(id: string): Promise<ContactResult> {
    throw new Error("Method not implemented.");
  }
  async getContacts(): Promise<ContactResult[]> {
    throw new Error("Method not implemented.");
  }
  async updateContact(id: string, data: Partial<Contact>): Promise<ContactResult> {
    throw new Error("Method not implemented.");
  }
  async deleteContact(id: string): Promise<void> {
    throw new Error("Method not implemented.");
  }


}

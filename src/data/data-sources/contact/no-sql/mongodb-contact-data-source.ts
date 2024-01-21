import { Contact } from "../../../../domain/entities/Contact";
import { ContactResult } from "../../../../domain/entities/ContactResult";
import { ContactDataSource } from "../../../interfaces/data-sources/contact/contact-data-source";

export class MongodbContactDataSource implements ContactDataSource{
  create(contact: Contact): Promise<ContactResult> {
    throw new Error("Method not implemented.");
  }
  getOne(id: string): Promise<ContactResult> {
    throw new Error("Method not implemented.");
  }
  getAll(): Promise<ContactResult> {
    throw new Error("Method not implemented.");
  }
  deleteOne(id: string): Promise<ContactResult> {
    throw new Error("Method not implemented.");
  }
  updateOne(id: string, data: Partial<Contact>): Promise<ContactResult> {
    throw new Error("Method not implemented.");
  }
  
}
 

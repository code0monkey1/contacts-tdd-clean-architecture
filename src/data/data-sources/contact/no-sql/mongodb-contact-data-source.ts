import { Contact } from "../../../../domain/entities/Contact";
import { ContactResult } from "../../../../domain/entities/ContactResult";
import { ContactDataSource } from "../../../interfaces/data-sources/contact/contact-data-source";
import { NoSqlDbWrapper } from "../../../interfaces/db-wrappers/nosql-db-wrapper";

export class MongodbContactDataSource implements ContactDataSource{

  constructor(private db:NoSqlDbWrapper){}
  async create(contact: Contact): Promise<ContactResult> {
    const contactResult = await this.db.insertOne(contact)
    return contactResult
  }
  getOne(id: string): Promise<ContactResult> {
    throw new Error("Method not implemented.");
  }
  getAll(): Promise<ContactResult> {
    throw new Error("Method not implemented.");
  }
  deleteOne(id: string): Promise<void> {
    throw new Error("Method not implemented.");
  }
  updateOne(id: string, data: Partial<Contact>): Promise<ContactResult> {
    throw new Error("Method not implemented.");
  }
  
}
 

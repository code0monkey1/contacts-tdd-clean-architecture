
import { MongodbContactDataSource } from "./data/data-sources/contact/no-sql/mongodb-contact-data-source";
import { NoSqlDbWrapper } from "./data/interfaces/db-wrappers/nosql-db-wrapper";
import { ContactRepository } from './domain/interfaces/repositories/contacts/contact-repository';
import { ContactRepositoryImpl } from './domain/repositories/contact/contact-repository-impl';
import { CreateContact } from "./domain/use-cases/create-contact";
import ContactRouter from "./presentation/routers/contact/contact-router";
import server from "./server";

import { ContactDataSource } from "./data/interfaces/data-sources/contact/contact-data-source";
import ContactModel from "./data/schemas/contact/contact-model";

async function getMongoDs() :Promise<ContactDataSource>{

    const contactDb:NoSqlDbWrapper={
      
      find: async function (query: object): Promise<any[]> {
        const contacts = await ContactModel.find(query);
        return contacts;
      },
      findOne: async function (id: string): Promise<any> {
        const contact = await ContactModel.findOne({ _id: id });
        return contact;
      },
      insertOne: async function (data: object): Promise<any> {
        const contact = await ContactModel.create(data);

        return contact;
      },
      updateOne: async function (id: string, data: object): Promise<any> {
        const contact = await ContactModel.findOneAndUpdate({ _id: id }, data, {
          new: true,
        });
        return contact ;
      },
      deleteOne: async function (id: string): Promise<void> {
        await ContactModel.deleteOne({ _id: id });
      },
    
    }
                 
    return new MongodbContactDataSource(contactDb)
}

(async ()=>{

  const dataSource =await getMongoDs()

  const contactsRouter=ContactRouter( new CreateContact( new ContactRepositoryImpl(dataSource)))

  server.listen(3000,()=>{
  
      console.log("Server Listening to port 3000")
  })

})();





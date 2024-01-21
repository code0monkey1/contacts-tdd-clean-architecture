import mongoose from "mongoose";
import { MongodbContactDataSource } from "./data/data-sources/contact/no-sql/mongodb-contact-data-source";
import { NoSqlDbWrapper } from "./data/interfaces/db-wrappers/nosql-db-wrapper";
import ContactRouter from "./presentation/routers/contact/contact-router";
import server from "./server";

async function getMongoDs(){

    const contactDb:NoSqlDbWrapper={
      
      find: function (id: string): Promise<any[]> {
        throw new Error("Function not implemented.");
      },
      insertOne: function (data: any): Promise<any> {
        throw new Error("Function not implemented.");
      },
      deleteOne: function (id: string): Promise<any> {
        throw new Error("Function not implemented.");
      },
      updateOne: function (id: string, data: any): Promise<any> {
        throw new Error("Function not implemented.");
      }
    
    }
    
    return new MongodbContactDataSource(contactDb)
}



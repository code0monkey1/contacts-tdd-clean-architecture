import * as dotenv from 'dotenv';
import mongoose, { ConnectOptions } from 'mongoose';
import utils from '../utils';
dotenv.config();


export default class Database {
  private static _database: Database;
  private constructor() {
    const DB_URL = utils.MONGO_DB_URI;

    if (DB_URL) {
      console.log("starting to connect to db")
      mongoose
        .connect(DB_URL, {
          useNewUrlParser: true,
          useUnifiedTopology: true,
        } as ConnectOptions)
        .then(() => console.log('✅ Connected with database'))
        .catch(() =>{
         console.error('❌ Not connected with database')
          process.exit(0);
        }
         );
    }
  }
  static connect() {
    if (this._database) {
      console.log("returning running database")
      return this._database;
    }
    console.log("creating new database and returning it ")
    this._database = new Database();
    return (this._database = new Database());
  }
}
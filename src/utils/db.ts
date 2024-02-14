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
        .then(() =>
        {
          console.log('✅ Connected to DB')

          // Health check
          setInterval(() => {
            // Perform a test query or check the connection status
            if (!mongoose.connection.readyState) {
              console.error('DB connection error');
              // Set a flag or emit an event to indicate the DB connection issue
              // For example: dbConnectionError = true;
            }
          }, 5000);
        })
        .catch((error) =>{
          let errorMessage ;

          if (error instanceof Error){
            errorMessage=error.message
          }
          console.error('❌ Not connected with database : ',errorMessage)
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



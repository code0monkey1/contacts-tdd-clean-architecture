import { MongodbContactDataSource } from '../../../../../src/data/data-sources/contact/no-sql/mongodb-contact-data-source';
import { ContactDataSource } from '../../../../../src/data/interfaces/data-sources/contact/contact-data-source';
import { NoSqlDbWrapper } from '../../../../../src/data/interfaces/db-wrappers/nosql-db-wrapper';
import { Contact } from '../../../../../src/domain/entities/Contact';

class MockNoSqlDatabase implements NoSqlDbWrapper{
  find(id: string): Promise<any[]> {
    throw new Error('Method not implemented.');
  }
  insertOne(data: any): Promise<any> {
    throw new Error('Method not implemented.');
  }
  deleteOne(id: string): Promise<any> {
    throw new Error('Method not implemented.');
  }
  updateOne(id: string, data: any): Promise<any> {
    throw new Error('Method not implemented.');
  }
  
}

describe('MongodbContactDataSource', () => {
  
      let mockNoSqlDb:NoSqlDbWrapper
      let mongodbContactDbSource:ContactDataSource

      beforeEach(()=>{
        jest.clearAllMocks()

        mockNoSqlDb= new MockNoSqlDatabase()
        mongodbContactDbSource = new MongodbContactDataSource(mockNoSqlDb)

      })


      describe('insertOne', () => {

          const contact:Contact={
          firstName:'a',
          surName:'b',
          email:"email@gmail.com"
        }


        it('creates a new contact',async()=>{

          jest.spyOn(mockNoSqlDb,'insertOne').mockImplementation(()=>Promise.resolve(contact))

            
         const response= await mockNoSqlDb.insertOne(contact)

         expect(mockNoSqlDb.insertOne).toHaveBeenCalledWith(contact)

         expect(response).toBe(contact)


        })
        
      })
      
})

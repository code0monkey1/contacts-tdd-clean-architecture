import { ContactDataSource } from "../../../../src/data/interfaces/data-sources/contact/contact-data-source";
import { Contact } from "../../../../src/domain/entities/Contact";
import { ContactResult } from "../../../../src/domain/entities/ContactResult";
import { ContactRepositoryImpl } from '../../../../src/domain/repositories/contact/contact-repository-impl';

class MockContactDataSource implements ContactDataSource{
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


describe('Contact Repository', () => {
  
  let contactRepository;
  let mockContactDataSource;


  beforeEach(()=>{
    jest.clearAllMocks()
    mockContactDataSource=new MockContactDataSource()
    contactRepository=new ContactRepositoryImpl(mockContactDataSource)

  })


  describe('The repository', () => {
    
    it('is true',()=>{

          expect(true).toBe(true)

    })

    
  })
  
  
})

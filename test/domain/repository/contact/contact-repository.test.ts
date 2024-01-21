import { ContactDataSource } from "../../../../src/data/interfaces/data-sources/contact/contact-data-source";
import { Contact } from "../../../../src/domain/entities/Contact";
import { ContactResult } from "../../../../src/domain/entities/ContactResult";
import { ContactRepository } from '../../../../src/domain/interfaces/repositories/contacts/contact-repository';
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
  
  let contactRepository:ContactRepository;
  let mockContactDataSource:ContactDataSource;


  beforeEach(()=>{
    
    jest.clearAllMocks()
    mockContactDataSource= new MockContactDataSource()
    contactRepository=new ContactRepositoryImpl(mockContactDataSource)

  })


  describe('getAllContacts', () => {

    const contact:Contact={
      email: "mail@email.com",
      firstName: "a",
      surName: "b"
    }
   

    it('gets the contacts array',async()=>{
       
      jest.spyOn(mockContactDataSource,'getAll').mockImplementation(()=>Promise.resolve({data:[contact]}))
      
      const res = await contactRepository.getContacts()

      expect(res).toBe({data:[contact]})
          
    })
    
  })
  
  
  
})

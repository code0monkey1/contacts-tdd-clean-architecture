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


  describe('createContact', () => {

    const contact:Contact={
      email: "mail@email.com",
      firstName: "a",
      surName: "b"
    }
   

    it('creates new contact',async()=>{

      const response:ContactResult={
        data:[contact]
      }
       
      jest.spyOn(mockContactDataSource,'create').mockImplementation(()=>Promise.resolve(response))
      
      const res = await contactRepository.createContact(contact)
      
      expect(mockContactDataSource.create).toHaveBeenCalledWith(contact)

      expect(res).toBe(response)
          
    })

    it('does not create a contact and returns an error',async ()=>{

      const response:ContactResult={
        error:"contact not crated"
      }
       
      jest.spyOn(mockContactDataSource,'create').mockImplementation(()=>Promise.resolve(response))
      
      const res = await contactRepository.createContact(contact)
      
      expect(mockContactDataSource.create).toHaveBeenCalledWith(contact)

      expect(res).toBe(response)

    })
    
  })
  
  
  
})

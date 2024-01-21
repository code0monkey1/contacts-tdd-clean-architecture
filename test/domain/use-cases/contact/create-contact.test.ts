import { Contact } from "../../../../src/domain/entities/Contact";
import { ContactResult } from "../../../../src/domain/entities/ContactResult";
import { ContactRepository } from '../../../../src/domain/interfaces/repositories/contacts/contact-repository';
import { CreateContactUseCase } from "../../../../src/domain/interfaces/use-cases/contact/crate-contact-use-case";
import { CreateContact } from '../../../../src/domain/use-cases/create-contact';

class MockContactRepository implements ContactRepository{
  createContact(contact: Contact): Promise<ContactResult> {
    throw new Error("Method not implemented.");
  }
  getContact(id: string): Promise<ContactResult> {
    throw new Error("Method not implemented.");
  }
  getContacts(): Promise<ContactResult[]> {
    throw new Error("Method not implemented.");
  }
  updateContact(id: string, data: Partial<Contact>): Promise<ContactResult> {
    throw new Error("Method not implemented.");
  }
  deleteContact(id: string): Promise<ContactResult> {
    throw new Error("Method not implemented.");
  }

  
}
describe('CreateContactUseCase', () => {

  let createContact:CreateContactUseCase
  let mockContactRepository:ContactRepository

  

  beforeEach(()=>{
    jest.clearAllMocks()
     mockContactRepository=new MockContactRepository()
     
     createContact= new CreateContact( mockContactRepository)
  })

 
  //success
  describe('Contact ', () => {

    const contact:Contact={
        firstName:'a',
        surName:'b',
        email:"email@gmail.com"
      }

   it(`is created `,async()=>{

   
      jest
      .spyOn(mockContactRepository,'createContact')
      .mockImplementation(()=>Promise.resolve({data:[contact]}))

       const res = await createContact.execute(contact)

       expect(mockContactRepository.createContact)
       .toHaveBeenCalledWith(contact)

       expect(res.data)
       .toEqual([contact])

    })
    
    //failure
    it('was a not created',async()=>{

         
      jest
      .spyOn(mockContactRepository,'createContact')
      .mockImplementation(()=>Promise.resolve({error:"The contact was not created"}))

    
       const res = await createContact.execute(contact)

       expect(mockContactRepository.createContact).toHaveBeenCalledWith(contact);

       await expect(res.error).toBe("The contact was not created");
      

    })

  })


})

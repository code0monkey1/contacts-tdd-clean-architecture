import { Contact } from "../../../../src/domain/entities/Contact";
import { ContactRepository } from '../../../../src/domain/interfaces/repositories/contacts/contact-repository';
import { CreateContactUseCase } from "../../../../src/domain/interfaces/use-cases/contact/crate-contact-use-case";
import { ContactResponseModel } from "../../../../src/domain/models";
import { CreateContact } from '../../../../src/domain/use-cases/create-contact';


describe('CreateContactUseCase', () => {

  let createContact:CreateContactUseCase
  let mockContactRepository:ContactRepository

  
  class MockContactRepository implements ContactRepository{
    getContact(id: string): Promise<ContactResponseModel> {
      throw new Error("Method not implemented.");
    }
    updateContact(id: string, data: Partial<Contact>): Promise<boolean> {
      throw new Error("Method not implemented.");
    }
    deleteContact(id: string): Promise<boolean> {
      throw new Error("Method not implemented.");
    }
    createContact(contact: Contact): Promise<boolean> {
      throw new Error("Method not implemented.");
    }
    
  }

  beforeEach(()=>{
    
     mockContactRepository=new MockContactRepository()
     
     createContact= new CreateContact( mockContactRepository)
  })

  afterEach(()=>{
    
    jest.clearAllMocks()

  })
 
  //success
  describe('Contact creation', () => {

    const contact={
        firstName:'a',
        surName:'b',
        email:"email@gmail.com"
      }

   it(` is successful `,async()=>{

   
      jest
      .spyOn(mockContactRepository,'createContact')
      .mockImplementation(()=>Promise.resolve(true))


       const res = await createContact.execute(contact)

       expect(mockContactRepository.createContact)
       .toHaveBeenCalledWith(contact)

       expect(res)
       .toBe(true)

    })

    it('is a failure',async()=>{

         
      jest
      .spyOn(mockContactRepository,'createContact')
      .mockImplementation(()=>Promise.reject("error"))


       const res = await createContact.execute(contact)

        expect(mockContactRepository.createContact).toHaveBeenCalledWith(contact);

      //  expect(res).toBeInstanceOf(Error);
      

    })


  })




  //failure
  // describe('',()=>{


  // })
  
})

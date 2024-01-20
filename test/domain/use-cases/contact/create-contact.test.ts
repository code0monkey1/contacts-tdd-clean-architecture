import { Contact } from "../../../../src/domain/entities/Contact";
import { ContactRepository } from '../../../../src/domain/interfaces/repositories/contacts/contact-repository';
import { CreateContactUseCase } from "../../../../src/domain/interfaces/use-cases/contact/crate-contact-use-case";
import { CreateContact } from '../../../../src/domain/use-cases/create-contact';


describe('CreateContactUseCase', () => {

  let createContact:CreateContactUseCase
  let mockContactRepository:ContactRepository

  
  class MockContactRepository implements ContactRepository{
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

    it.each([{
      contacts:[{
        firstName:'a',
        surName:'b',
        email:"email@gmail.com"
      }]
    }
  ])(` contact is successful `,async({contacts})=>{

   
      jest
      .spyOn(mockContactRepository,'createContact')
      .mockImplementation(()=>Promise.resolve(true))


       const res = await createContact.execute(contacts[0])

       expect(mockContactRepository.createContact)
       .toHaveBeenCalledWith(contacts[0])

       expect(res)
       .toBe(true)

    })


  })




  //failure
  // describe('',()=>{


  // })
  
})

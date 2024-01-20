import { Contact } from '../../../../../src/domain/entities/Contact';
export const getContacts=(n:number)=>{

    let contacts=[]


    for(let i=1;i<=n;i++){

          let contact:Contact={
            firstName:i+'',
            surName:i+'',
            email: i+"@email.com"
          }

          contacts.push(contact)
    }


    return contacts

}
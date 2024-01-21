import { Contact } from '../entities/Contact';

export type ContactRequestModel={
  id:string
}

export type ContactResponseModel=Required<Pick<Contact, 'id'>> & Contact 
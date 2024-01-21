import { Contact } from '../entities/Contact';

export type ContactUpdateModel=Partial<Contact>

export type ContactResponseModel=Required<Pick<Contact, 'id'>> & Contact 
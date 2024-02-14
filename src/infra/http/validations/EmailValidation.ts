
import { EmailValidator } from "./interfaces/EmailValidator";

export class EmailValidation implements EmailValidator{
  isValid: (email: string) => boolean;
  


}
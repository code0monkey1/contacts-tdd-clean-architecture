import { z } from 'zod';
import { EmailValidator } from "./interfaces/EmailValidator";

const emailSchema = z.string().email();

export class EmailValidation implements EmailValidator {
  isValid(email: string): boolean {

    const parsedEmail = emailSchema.safeParse(email);
    return parsedEmail.success;
  }
  
}
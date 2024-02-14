import { Validation } from "../interfaces/Validation";

class EmailValidation implements Validation{
  validate(input: any): Error | null {
    throw new Error("Method not implemented.");
  }

}
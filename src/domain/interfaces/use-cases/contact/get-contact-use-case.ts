import { ContactResult } from "../../../entities/ContactResult";

export interface GetContactUseCase{
   execute(id:string):Promise<ContactResult>
}

export namespace GetContactUseCase{

  export type request=string
  export type response=Promise<ContactResult|Error> 

}
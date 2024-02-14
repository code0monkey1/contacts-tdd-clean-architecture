import { ContactResult } from "../../../entities/ContactResult";

export interface GetContactUseCase{
   execute(id:GetContactUseCase.request):Promise<GetContactUseCase.response>
}

export namespace GetContactUseCase{

  export type request=string
  export type response=Promise<ContactResult|Error> 

}
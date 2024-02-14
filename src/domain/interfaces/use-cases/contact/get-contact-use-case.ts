import { ContactResult } from "../../../entities/ContactResult";
import { UseCase } from "../../UseCase";

export interface GetContactUseCase extends UseCase<GetContactUseCase.request,GetContactUseCase.response>{
  
   execute(id:GetContactUseCase.request):Promise<GetContactUseCase.response>
}

export namespace GetContactUseCase{

  export type request=string
  export type response=ContactResult|Error

}
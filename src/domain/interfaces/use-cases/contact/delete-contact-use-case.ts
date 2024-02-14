import { UseCase } from "../../UseCase";

export interface DeleteContactUseCase extends UseCase<DeleteContactUseCase.request,DeleteContactUseCase.response>{

  execute(contactId:DeleteContactUseCase.request):Promise<DeleteContactUseCase.response>

}

export namespace DeleteContactUseCase {
   export type request=string
   export type response = void
}
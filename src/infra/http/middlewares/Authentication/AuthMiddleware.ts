import { AuthTokenNotProvidedError } from "../../errors/AuthTokenNotProvidedError";
import { InvalidAuthTokenError } from "../../errors/InvalidAuthTokenError";
import { HttpRequest } from "../../interfaces/HttpRequest";
import { HttpResponse } from "../../interfaces/HttpResponse";
import { BaseMiddleware } from "../BaseMiddleware";



export class AuthMiddleware extends BaseMiddleware{
  constructor(){
    super()
  }

  execute(httpRequest: AuthMiddleware.request): Promise<AuthMiddleware.response> {
    throw new Error("Method not implemented.");
  }
  
}


export namespace AuthMiddleware{
  export type request=HttpRequest<undefined,undefined,  { authorization: string }>
  export type response = HttpResponse<{userId:string} | AuthTokenNotProvidedError  | InvalidAuthTokenError >
}
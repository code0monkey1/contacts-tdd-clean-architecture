import { HttpRequest } from "../../interfaces/HttpRequest";
import { HttpResponse } from "../../interfaces/HttpResponse";
import { BaseMiddleware } from "../BaseMiddleware";

export class AuthMiddleware extends BaseMiddleware{

  execute(httpRequest: HttpRequest): Promise<HttpResponse> {
    throw new Error("Method not implemented.");
  }
  
}
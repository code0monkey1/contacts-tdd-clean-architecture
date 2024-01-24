import { ServerError } from "../errors/ServerError";
import { HttpResponse } from "../interfaces/HttpResponse";

export const serverError = (error?: Error | unknown): HttpResponse<Error> => {
  const stack = error instanceof Error ? error.stack : undefined;
  return {
    status: 500,
    body: new ServerError(stack),
  } ;
};
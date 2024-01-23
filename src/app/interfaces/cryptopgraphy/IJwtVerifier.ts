export interface IJwtVerifier{
  verify(jwt:string):Promise<string> |string
}
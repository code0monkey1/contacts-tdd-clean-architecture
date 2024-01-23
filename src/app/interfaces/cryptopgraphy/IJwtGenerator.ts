export interface IJwtGenerator{
   generate(payload:string):Promise<string>
}
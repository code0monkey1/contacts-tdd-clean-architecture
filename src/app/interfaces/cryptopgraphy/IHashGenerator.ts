export interface IHashGenerator{

  hash(data:string):Promise<string>| string

}
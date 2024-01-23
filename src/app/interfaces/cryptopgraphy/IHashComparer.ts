export interface IHashComparer{
     compare(plainText:string,hash:string):Promise<boolean> |boolean
}
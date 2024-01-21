export interface NoSqlDbWrapper{
  find(id:string):Promise<any[]>
  insertOne(data:any):Promise<any>
  deleteOne(id:string):Promise<any>
  updateOne(id:string,data:any):Promise<any>
  
}
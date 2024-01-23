export interface NoSqlDbWrapper{
  find(query:object):Promise<any[]>
  findOne(id:string):Promise<any|null>
  insertOne(data:object):Promise<any|null>
  deleteOne(id:string):Promise<any>
  updateOne(id:string,data:any):Promise<any>
  
}
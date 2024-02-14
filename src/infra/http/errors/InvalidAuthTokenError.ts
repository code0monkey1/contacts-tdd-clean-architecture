export class InvalidAuthTokenError extends Error{
     
    constructor(){
      super('Invalid Authentication Token')
      this.name="InvalidAuthTokenError"
    }

}
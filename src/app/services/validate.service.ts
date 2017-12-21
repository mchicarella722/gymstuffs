import { Injectable } from '@angular/core';
@Injectable()
export class ValidateService {

  constructor() { }

  validateRegister(user){
    if(user.password != user.confPass){
      console.log("Passwords don't match");
      return false;
    }
    return true;
  }
}

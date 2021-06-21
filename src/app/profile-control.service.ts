import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProfileControlService {

  private isLoggedIn:boolean = false;

  constructor() { }

  //check if user is logged in
  public loggedInStatus(){
    this.isLoggedIn = false;
    return this.isLoggedIn;
    

  }
}

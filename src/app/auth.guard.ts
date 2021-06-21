import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { ProfileControlService } from "./profile-control.service";

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private profile: ProfileControlService){
    
  }
  
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
      if(!this.profile.loggedInStatus()){
        alert('You are not logged in - access denied');
        return false;
      }else{
        return true;
      }
  }
  
}

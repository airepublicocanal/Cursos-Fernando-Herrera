import { Injectable } from '@angular/core';
import { Router, ActivatedRouteSnapshot, RouterStateSnapshot, CanActivate } from '@angular/router';

import { AuthService } from './auth.service';

@Injectable()
export class AuthGuardService {

  constructor(private auth:AuthService) { }

  canActivate(next:ActivatedRouteSnapshot, state:RouterStateSnapshot) {
    let result = false;
    console.log(next);
    if (this.auth.isAuthenticated()) {
      console.log("Paso el guard");
      result = true;
    } else {
        console.log("Bloqueado por el guard");
    }

    return result;
  }

}

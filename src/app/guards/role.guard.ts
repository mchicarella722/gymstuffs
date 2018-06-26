import { Injectable } from "@angular/core";
import { Router, CanActivate, ActivatedRouteSnapshot } from "@angular/router";
import { AuthService } from "../services/auth.service";
import decode from 'jwt-decode';

@Injectable()
export class RoleGuard implements CanActivate {
    constructor(private authService: AuthService, private router: Router) {

    }

    canActivate(route: ActivatedRouteSnapshot): boolean {
        const token = this.authService.loadToken();
        if(this.authService.loggedIn()){
            decode(token).forEach(role => {
                if (role == route.data.expectedRole){
                    return true;
                }
            });
        }
        return false;
    }
}

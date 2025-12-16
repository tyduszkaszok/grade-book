import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Auth } from '../services/auth';

@Injectable({
  providedIn: 'root'
})
export class HasRoleGuard implements CanActivate {

  constructor(private authService: Auth, private router : Router) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {

    const isAuthorised = this.authService.user.role.includes(route.data['role']);
    if(!isAuthorised){
      window.alert("No authorization!");
      this.router.navigate(['/dashboard/school-info']);
    
    }

    return isAuthorised;
  }
}

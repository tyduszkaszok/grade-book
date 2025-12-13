import { Injectable } from '@angular/core';
import { Api } from './api'
import { tap } from 'rxjs/operators'
import { BehaviorSubject } from 'rxjs';
import { UserModel } from '../models/user';
@Injectable({
  providedIn: 'root',
})
export class Auth {
  private _isLoggedIn$ = new BehaviorSubject<boolean>(false);
  isLoggedIn$ = this._isLoggedIn$.asObservable();
  user!: UserModel;

  get token(): any {
    return localStorage.getItem("auth");
  }
  constructor(private apiService: Api) {
    const token = this.token;
    this._isLoggedIn$.next(!!token);
    if (token) {
      this.user = this.getUser(token);
    }
  }

  login(username: string, password: string) {
    return this.apiService.login(username, password).pipe(tap((response: any) => {
      this._isLoggedIn$.next(true);
      localStorage.setItem('auth', response.token);
      this.user = this.getUser(response.token)
    })
    );

  }

  logout(){
    localStorage.removeItem('auth')

  }

  public getRole() : string {
    return this.getUser(this.token)['role']
  }

  public getClass() : string | null{
    return this.getUser(this.token)['class']
  }

  public getUserId() : string {
    return this.getUser(this.token)['username']
  }

  private getUser(token: string): UserModel {
    return JSON.parse(atob(token.split('.')[1])) as UserModel;
  }
}

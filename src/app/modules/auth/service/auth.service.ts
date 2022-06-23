import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, catchError, map, Observable, throwError } from 'rxjs';
import { UserAuth } from 'src/app/shared/models/auth.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private auth = environment.urlAuth
  private loggedIn = new BehaviorSubject<boolean>(false)

  constructor(private http: HttpClient) {
    this.checkToken()
  }

  get isLogged(): Observable<boolean> {
    return this.loggedIn.asObservable()
  }

  signIn(user: UserAuth): Observable<any> {
    return this.http
      .post<UserAuth>(this.auth, {
        email: user.email,
        password: user.password
      })
      .pipe(
        map((res: UserAuth) => {
          this.saveToken(res.token)
          this.loggedIn.next(true)
          return res
        }),
        catchError(err => this.handlerError(err))
      )
  }

  saveToken(token: string): void {
    localStorage.setItem('token', token)
  }
  logout(): void {
    localStorage.removeItem('token')
    this.loggedIn.next(false)
  }
  checkToken() {
    const userToken = localStorage.getItem('token')
    userToken ? this.loggedIn.next(true) : this.logout()
  }
  private handlerError(err: any): Observable<any> {
    window.alert(err.message)
    return err
  }
}

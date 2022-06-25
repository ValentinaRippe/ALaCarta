import { Injectable, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, catchError, map, Observable } from 'rxjs';
import { UserAuth } from 'src/app/shared/models/auth.model';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root',
})
export class AuthService implements OnInit {
  private auth = environment.urlAuth;
  private loggedIn = new BehaviorSubject<boolean>(false);

  toast = Swal.mixin({
    toast: true,
    showConfirmButton: false,
    timer: 1000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.addEventListener('mouseenter', Swal.stopTimer);
      toast.addEventListener('mouseleave', Swal.resumeTimer);
    },
  });

  constructor(private http: HttpClient, private router: Router) {
    this.checkToken();
  }
  ngOnInit(): void {}

  get isLogged(): Observable<boolean> {
    return this.loggedIn.asObservable();
  }

  signIn(user: UserAuth): Observable<any> {
    return this.http
      .post<UserAuth>(this.auth, {
        email: user.email,
        password: user.password,
      })
      .pipe(
        map((res: UserAuth) => {
          this.saveToken(res.token);
          this.loggedIn.next(true);
          this.router.navigate(['/home'])
          this.toast.fire({
            icon: 'success',
            title: 'Signed in successfully',
            position: 'bottom-end'
          });
          return res;
        }),
        catchError(() => {
          this.loggedIn.next(false);
          return this.toast.fire({
            icon: 'error',
            title: 'Signed unauthorized',
          })
        })
      );
  }

  saveToken(token: string): void {
    localStorage.setItem('token', token);
  }
  logout(): void {
    localStorage.removeItem('token');
    this.loggedIn.next(false);
    this.router.navigate(['/sign-in']);
  }
  checkToken() {
    const userToken = localStorage.getItem('token');
    userToken ? this.loggedIn.next(true) : this.logout();
    return this.loggedIn;
  }
}

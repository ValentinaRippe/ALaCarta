import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/core/service/auth/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html'
})
export class NavbarComponent implements OnInit {
  auth!: object
  isLogged!: boolean

  constructor(private authUser: AuthService) {
  }

  ngOnInit(): void {
    this.authUser.isLogged.subscribe(res => this.isLogged = res)
  }

  logout():void {
    this.authUser.logout()
  }
}

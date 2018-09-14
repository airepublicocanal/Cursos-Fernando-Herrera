import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private auth:AuthService) {
    this.auth.handleAuthentication();
  }

  ngOnInit() {
  }

  login() {
    console.log("Entra");
    this.auth.login();
  }

  logout() {
    console.log("Sale");
    this.auth.logout();
  }

}

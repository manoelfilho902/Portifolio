import { AuthenticationService, login } from './../../service/authentication.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  constructor(
    private auth: AuthenticationService
  ){}

  login(){
    this.auth.login({
      userName: "admin@myaplication.com",
      password: "8f38430f9d60b28e01fd3248dc025b2d"
    }).subscribe(res => {
      console.log(res);
      
    })
  }
}

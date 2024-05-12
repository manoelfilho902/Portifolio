import { Component, OnInit } from '@angular/core';
import { RequestService } from './service/request.service';
import { ErroComponent } from './error/erro/erro.component';
import { MatDialog } from '@angular/material/dialog';
import { AuthenticationService } from './service/authentication.service';
import { Router } from '@angular/router';
import { LoginComponent } from './page/login/login.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'Portfolio';

  constructor(
    private auth: AuthenticationService,
    private router: Router
  ){}
  ngOnInit(): void {
    this.router.navigate(['/login'])
  }

}

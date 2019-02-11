import { Component, OnInit } from '@angular/core';
import { Observable, timer, of } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { Router } from '@angular/router';
// import { LoginService } from './components/login/login-service/login-service.service';

@Component({
  selector: 'app-form-login',
  templateUrl: './form-login.component.html',
  styleUrls: ['./form-login.component.css']
})
export class FormLoginComponent implements OnInit {
  user_field: string;
  pass_field: string;
  constructor(private router: Router) { }

  ngOnInit() {
  }

  onClickLogin() {
    console.log(this.user_field);
    console.log(this.pass_field);
    // this.router.navigate(['']);
  }

  onClickRegister() {
    console.log('Register');
  }
}

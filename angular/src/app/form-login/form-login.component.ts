import { Component, OnInit } from '@angular/core';
import { Observable, timer, of } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { Router } from '@angular/router';
import { LoginService } from './login-service/login-service.service';

@Component({
  selector: 'app-form-login',
  templateUrl: './form-login.component.html',
  styleUrls: ['./form-login.component.css']
})
export class FormLoginComponent implements OnInit {
  user_field: string;
  pass_field: string;
  estiloTitulo: string;
  constructor(private router: Router, private loginService: LoginService) { }

  ngOnInit() {
    this.estiloTitulo = 'tituloNegro';
  }

  onClickLogin() {
    console.log(this.user_field);
    console.log(this.pass_field);
    this.loginService.login(this.user_field, this.pass_field).subscribe(x => {
      console.log(x);
      if (x) { this.estiloTitulo = 'tituloVerde'; } else { this.estiloTitulo = 'tituloRojo'; }
    });
  }

  onClickRegister() {
    console.log('Register');
  }
}

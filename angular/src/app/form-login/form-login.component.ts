import { Component, OnInit } from '@angular/core';
import { Observable, timer, of } from 'rxjs';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-form-login',
  templateUrl: './form-login.component.html',
  styleUrls: ['./form-login.component.css']
})
export class FormLoginComponent implements OnInit {
  constructor() { }

  ngOnInit() {
 }
}

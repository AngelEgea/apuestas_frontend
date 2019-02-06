import { Component, OnInit } from '@angular/core';
import { Observable, timer, of } from 'rxjs';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-form-login',
  templateUrl: './form-login.component.html',
  styleUrls: ['./form-login.component.css']
})
export class FormLoginComponent implements OnInit {
  numerito$: Observable<number>;
  a: number;

  constructor() { }

  ngOnInit() {
   this.a = 0;
   this.numerito$ = of(this.a);
   // Every minute we are going to update accessCodeAttended$ starting instantly
   setInterval(x => this.a++, 1000);
 }

 reset(): void {
  this.a = 0;
 }

 increase10(): void {
   this.a += 10;
 }
}

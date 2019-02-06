import { HostBackend } from './shared/hostBackend';

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'angular';
  IPfield: string;
  Portfield: string;

  ngOnInit() {
    this.IPfield = HostBackend.ip = 'localhost';
    this.Portfield = '8081';
    HostBackend.port = 8081;
  }

  aplicarIP() {
    HostBackend.ip = this.IPfield;
  }

  aplicarPort() {
    HostBackend.port = parseInt(this.Portfield, 10);
  }
}

import { Component, OnInit } from '@angular/core';
import { Apuesta } from '../shared/apuesta';
import { GestionarApuestasService } from './apuestas-service/apuestas-service.service';

@Component({
  selector: 'app-form-apuestas',
  templateUrl: './form-apuestas.component.html',
  styleUrls: ['./form-apuestas.component.css']
})
export class FormApuestasComponent implements OnInit {
  apuestas: Apuesta[];

  constructor(private gestorApuestas: GestionarApuestasService) { }

  ngOnInit() {
    this.getApuestas();
    setInterval(_ => this.getApuestas(), 1000);
  }

  getApuestas(): void {
    this.gestorApuestas.getApuestas().subscribe(
      (nuevas_apuestas => this.apuestas = nuevas_apuestas as Apuesta[]),
      (_ => this.apuestas = [])
    );
  }
}

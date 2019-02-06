import { Component, OnInit } from '@angular/core';
import { Apuesta } from '../shared/apuesta';
import { GestionarApuestasService } from '../gestionar-apuestas/gestionar-apuestas.service';

@Component({
  selector: 'app-ver-apuestas',
  templateUrl: './ver-apuestas.component.html',
  styleUrls: ['./ver-apuestas.component.css']
})
export class VerApuestasComponent implements OnInit {
  apuestas: Apuesta[];

  constructor(private gestorApuestas: GestionarApuestasService) { }

  ngOnInit() {
    // setInterval(() => { this.getApuestas(); }, 1000);
    this.getApuestas();
  }

  getApuestas(): void {
    this.gestorApuestas.getApuestas().subscribe(nuevas_apuestas => this.apuestas = nuevas_apuestas);
    console.log(this.apuestas);
  }
}

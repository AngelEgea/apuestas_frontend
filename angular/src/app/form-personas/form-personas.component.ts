import { Component, OnInit } from '@angular/core';
import { Persona } from '../shared/persona';
import { GestionarPersonasService } from './personas-service/personas-service.service';

@Component({
  selector: 'app-form-personas',
  templateUrl: './form-personas.component.html',
  styleUrls: ['./form-personas.component.css']
})
export class FormPersonasComponent implements OnInit {
  personas: Persona[];

  constructor(private gestorPersonas: GestionarPersonasService) { }

  ngOnInit() {
    this.getPersonas();
    setInterval(_ => this.getPersonas(), 1000);
  }

  getPersonas(): void {
    this.gestorPersonas.getPersonas().subscribe(nuevas_personas => this.personas = nuevas_personas);
  }
}

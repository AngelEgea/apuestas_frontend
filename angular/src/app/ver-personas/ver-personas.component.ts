import { Component, OnInit } from '@angular/core';
import { Persona } from '../shared/persona';
import { GestionarPersonasService } from '../gestionar-personas/gestionar-personas.service';

@Component({
  selector: 'app-ver-personas',
  templateUrl: './ver-personas.component.html',
  styleUrls: ['./ver-personas.component.css']
})
export class VerPersonasComponent implements OnInit {
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

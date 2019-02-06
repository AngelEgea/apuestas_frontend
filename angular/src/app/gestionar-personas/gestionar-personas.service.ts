import { Injectable } from '@angular/core';
import { catchError, map, tap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Persona } from '../shared/persona';
import { HostBackend } from '../shared/hostBackend';

import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class GestionarPersonasService {
  private getAllPersonasUri = '/apuestas-backend/services/rest/personamanagement/v1/persona/search';
  private pageable = {
    'pageable' : {
      'pageNumber' : '0',
      'pageSize': '20'
    }
  };

  constructor(private http: HttpClient) { }

  /** POST apuestas from the server */
  getPersonas (): Observable<Persona[]> {
    return this.http.post<Persona[]>(this.generateURL(this.getAllPersonasUri), this.pageable, httpOptions)
      .pipe(
        map(personas => (this.procesarPersona(personas)))
      );
  }

  private procesarPersona(personas: Persona[]): Persona[] {
    personas = personas['content'];
    return personas;
  }

  private generateURL(uri: string): string {
    return 'http://' + HostBackend.ip + ':' + HostBackend.port + uri;
  }
}

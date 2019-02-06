import { Injectable } from '@angular/core';
import { catchError, map, tap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Apuesta } from '../shared/apuesta';
import { HostBackend } from '../shared/hostBackend';

import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class GestionarApuestasService {
  private getAllApuestasUri = '/apuestas-backend/services/rest/apuestamanagement/v1/apuesta/cto/search';
  private pageable = {
    'pageable' : {
      'pageNumber' : '0',
      'pageSize': '20'
    }
  };

  constructor(private http: HttpClient) { console.log('Gestionar apuestas service creado'); }

  /** POST apuestas from the server */
  getApuestas (): Observable<Apuesta[]> {
    return this.http.post<Apuesta[]>(this.generateURL(this.getAllApuestasUri), this.pageable, httpOptions)
      .pipe(
        map(apuestas => (this.procesarApuesta(apuestas)))
      );
  }

  private procesarApuesta(apuestas: Apuesta[]): Apuesta[] {
    apuestas = apuestas['content'];
    const nuevas_apuestas: Apuesta[] = [] as Apuesta[];
    apuestas.forEach(apuesta => nuevas_apuestas.push(apuesta['apuesta']));
    apuestas = nuevas_apuestas;
    return apuestas;
  }

  private generateURL(uri: string): string {
    return 'http://' + HostBackend.ip + ':' + HostBackend.port + uri;
  }
}

import { Injectable } from '@angular/core';
import { catchError, map, tap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Apuesta } from '../shared/apuesta';

import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class GestionarApuestasService {
  private getAllApuestasUrl = 'http://localhost:8081/apuestas-backend/services/rest/apuestamanagement/v1/apuesta/cto/search';
  private pageable = {
    'pageable' : {
      'pageNumber' : '0',
      'pageSize': '20'
    }
  };

  constructor(private http: HttpClient) { console.log('Gestionar apuestas service creado'); }

  /** POST apuestas from the server */
  getApuestas (): Observable<Apuesta[]> {
    return this.http.post<Apuesta[]>(this.getAllApuestasUrl, this.pageable, httpOptions)
      .pipe(
        tap(_ => console.log('got apuestas'))
      );
  }
}

import { Injectable } from '@angular/core';
import { catchError, map, tap } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { Apuesta } from '../../shared/apuesta';
import { HostBackend } from '../../shared/hostBackend';

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

  constructor(private http: HttpClient) { }

  /** POST apuestas from the server */
  getApuestas (): Observable<Apuesta[]> {
    return this.http.post<Apuesta[]>(this.generateURL(this.getAllApuestasUri), this.pageable, httpOptions)
      .pipe(
        catchError(this.handleError<Apuesta[]>('getApuestas', [])),
        map(apuestas => (this.procesarApuesta(apuestas)))
      );
  }

  private procesarApuesta(apuestas: Apuesta[]): Apuesta[] {
    if (!apuestas || apuestas.length === 0) {
      return [];
    }

    apuestas = apuestas['content'];
    const nuevas_apuestas: Apuesta[] = [] as Apuesta[];
    apuestas.forEach(apuesta => nuevas_apuestas.push(apuesta['apuesta']));
    apuestas = nuevas_apuestas;
    return apuestas;
  }

  private generateURL(uri: string): string {
    return 'http://' + HostBackend.ip + ':' + HostBackend.port + uri;
  }

  /**
 * Handle Http operation that failed.
 * Let the app continue.
 * @param operation - name of the operation that failed
 * @param result - optional value to return as the observable result
 */
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      // TODO: send the error to remote logging infrastructure
      // console.error(error); // log to console instead
      console.log('No se puede obtener la lista de apuestas');

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}

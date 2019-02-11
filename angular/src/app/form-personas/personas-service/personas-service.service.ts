import { Injectable } from '@angular/core';
import { catchError, map, tap } from 'rxjs/operators';
import { Observable, of } from 'rxjs';

import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Persona } from '../../shared/persona';
import { HostBackend } from '../../shared/hostBackend';

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
        catchError(this.handleError<Persona[]>('getPersonas', [])),
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
      console.log('No se puede obtener la lista de personas');

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}

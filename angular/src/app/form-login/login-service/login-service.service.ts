import { Injectable } from '@angular/core';
import { catchError, map, tap } from 'rxjs/operators';
import { Observable, of } from 'rxjs';

import { HttpClient, HttpHeaders } from '@angular/common/http';

import { HostBackend } from '../../shared/hostBackend';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private loginUri = '/apuestas-backend/services/rest/usuariomanagement/v1/usuario/login/';

  constructor(private http: HttpClient) { }

  /** POST login */
  login(username: string, password: string): Observable<Boolean> {
    return this.http.post<Boolean>(this.generateURL(this.loginUri), {username: username, password: password}, httpOptions)
      .pipe(
        catchError(this.handleError<Boolean>('login', false))
      );
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
      console.log('No se puede hacer login');

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}

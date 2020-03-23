import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { GeoHolder } from '../model/geo/geo-holder';
import { catchError, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class GeoServiceService {

  static API_KEY = '318f5513df398ca5877eb7dc5a53c875';
  static URL = 'http://api.ipstack.com/';
    /**
   * log messages to console
   */
  private log(message: string) {
    console.log(message);
  }

  constructor(private http: HttpClient) { }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }



  getGeoHolder(ipAddress: String): Observable<GeoHolder> {
    const completeURL = GeoServiceService.URL + ipAddress + '?access_key=' + GeoServiceService.API_KEY + '&format=1';
    return this.http.get<any>(completeURL).pipe(
      tap(() => this.log('Fetched one GeoHolder ')),
        catchError(this.handleError<GeoHolder[]>('getGeoHolder() = ${ipAddress}'))
    );
  }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { Tracker } from '../model/tracker';

@Injectable({
  providedIn: 'root'
})
export class DailyTrackerService {
  static URL = 'https://covid19dataservice.herokuapp.com/api/v2/day_tracker/confirmed/';

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

  /**
   * Get all the top headlines from the back-end service
   */


  getDailyTracker(country: String): Observable<Tracker> {
    this.log('Country ' + country);
    const country_specific_url = DailyTrackerService.URL + country;
    this.log('URL used ' + country_specific_url);
    return this.http.get<any>(country_specific_url).pipe(
      tap(
        () => {
          this.log('Fetched Daily status tracker ');
          // this.log(JSON.stringify(data));
        }
        ),
        catchError(this.handleError<Tracker[]>('getTracker() = ${country}'))
    );
  }
}

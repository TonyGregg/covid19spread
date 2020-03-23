import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { Article } from '../model/news/article';

@Injectable({
  providedIn: 'root'
})
export class NewsApiService {
  static API_KEY = '89830ec2efd04249868c73af74126511';
  static URL = 'http://newsapi.org/v2/top-headlines?q=';
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
  getTopHeadlines(country: String): Observable<Article[]> {
    console.log(NewsApiService.URL + '/' + country);
        // TODO
    // return of([]);
    const topic = 'coronavirus AND ';
    const country_specific_url = NewsApiService.URL + topic + country + 'apiKey=' + NewsApiService.API_KEY;
    return this.http.get<any[]>(country_specific_url).pipe(
      // Adapt each item in the raw data array. It uses Model-Adapter pattern
      map(data => data.map(Article.adapt)),
        catchError(this.handleError<Article[]>('getTopHeadlines() Spring REST API '))
    );
  } // end of getTopHeadlines method
}

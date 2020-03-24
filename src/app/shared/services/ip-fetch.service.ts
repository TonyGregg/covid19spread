import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class IpFetchService {

  constructor(private http: HttpClient) { }
  public getIpAddress() {
    return this.http.get('http://api.ipify.org/?format=json');
  }
}

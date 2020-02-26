import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpHeaders } from '@angular/common/http';
import { Observable, pipe } from "rxjs";
import { tap, catchError } from 'rxjs/operators';
import { environment } from '../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private httpClient: HttpClient) { }

  get() {
    debugger;
    let apiURL = environment.endpoint+"api/home/weekday";
    return this.httpClient.get<any>(apiURL, {
      // observe: 'response',
      responseType: 'json',
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    }).pipe(
      tap((response: HttpResponse<any>) => console.log(`Data fetched successfully.`)),

      catchError((error: any) => {
        return Observable.throw(error);
      })
    );
  }

  post(request: any): Observable<HttpResponse<any>> {
    let apiURL = environment.endpoint+"api/home/weekday";
    debugger;
    if (apiURL==""){
      console.log("no matching endpoint available");
      return null;
    }

    return this.httpClient.post<any>(apiURL, request, {
       observe: 'response',
      responseType: 'json',
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    }).pipe(
      tap((response: HttpResponse<any>) => console.log(`response captured successfully.`)),

      catchError((error: any) => {
        return Observable.throw(error);
      })
    );
  }

  put(request: any): Observable<HttpResponse<any>> {
    let apiURL = environment.endpoint+"api/home/weekday";
    debugger;
    if (apiURL == "") {
      console.log("no matching endpoint available");
      return null;
    }

    return this.httpClient.put<any>(apiURL, request, {
      observe: 'response',
      responseType: 'json',
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    }).pipe(
      tap((response: HttpResponse<any>) => console.log(`response captured successfully.`)),

      catchError((error: any) => {
        return Observable.throw(error);
      })
    );
  }
}

import { HttpClient, HttpErrorResponse, HttpStatusCode } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, of } from 'rxjs';
import { CustomErrorHandler } from '../error/CustomErroHandler';
import { HttpError } from '../error/error';

export const API_URL = {
  PORT: 8080,
  URL: () => `http://127.0.0.1:${API_URL.PORT}`
}

@Injectable({
  providedIn: 'root'
})
export class RequestService {

  constructor(
    private http: HttpClient
  ) { }

  get<T>(uri: string, params?: any): Observable<T | undefined> {
    var par = isValid(params) ? Object.keys(params).map((e) => `${e}=${params[e]}`).join('&') : '';

    return this.http.get<T>(`${API_URL.URL()}${uri}?${par}`).pipe(
      catchError((err: HttpErrorResponse) => {
        throw new HttpError(err.message, err.status);
      })
    );
  }

  post<T>(uri: string, body: any, params?: any): Observable<T | undefined> {
    var par = isValid(params) ? Object.keys(params).map((e) => `${e}=${params[e]}`).join('&') : '';

    return this.http.post<T>(`${API_URL.URL()}${uri}?${par}`, body).pipe(
      catchError((err: HttpErrorResponse) => {
        throw new HttpError(err.message, err.status);
      })
    );
  }

  put<T>(uri: string, body: any, params?: any): Observable<T | undefined> {
    var par = isValid(params) ? Object.keys(params).map((e) => `${e}=${params[e]}`).join('&') : '';

    return this.http.put<T>(`${API_URL.URL()}${uri}?${par}`, body).pipe(
      catchError((err: HttpErrorResponse) => {
        throw new HttpError(err.message, err.status);
      })
    );
  }

  delete(uri: string, body?: any, params?: any): Observable<any> {
    var par = isValid(params) ? Object.keys(params).map((e) => `${e}=${params[e]}`).join('&') : '';

    return this.http.delete(`${API_URL.URL()}${uri}?${par}`, isValid(body) ? body : {}).pipe(
      catchError((err: HttpErrorResponse) => {
        throw new HttpError(err.message, err.status);
      })
    );
  }
}

export const isValid = (value: any) => value && value != null && value !== undefined;
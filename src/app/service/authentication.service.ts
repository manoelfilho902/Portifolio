import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { API_URL, isValid } from './request.service';
import { Observable, catchError, map, mergeMap, of } from 'rxjs';
import { HttpError } from '../error/error';

export interface login {
  userName: string;
  password: string;
}



@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  
  static token: EventEmitter<string> = new EventEmitter(true);
  constructor(
    private http: HttpClient
  ) {}

  login(user: login): Observable<string | undefined> {
    if(!isValid(user)){
      throw new Error('Please inform correct data');
    }

    return this.http.post(`${API_URL.URL()}/auth/login`, user, {responseType: 'text'}).pipe(  
      map((res: string) => {
        if(isValid(res)){
          AuthenticationService.token.next(res);
        }
        return res;
      }),
      catchError((err: HttpErrorResponse) => {
        throw new HttpError(err.message, err.status); 
      })
    )
  }

}

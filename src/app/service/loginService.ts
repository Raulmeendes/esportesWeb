  
import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, } from '@angular/common/http';
import { Observable } from 'rxjs';
import {map} from 'rxjs/operators';
import {Login} from '../models/loginModal'

const httpOptions = {
  headers: new HttpHeaders({
    'Content-type': 'application/json'
  })
};

var api = 'localhost:8080/';

@Injectable({
  providedIn: 'root'
})


export class LoginService {

    constructor(private httpClient: HttpClient){}

    logarUsuario(login: Login): Observable<any>{
        return this.httpClient
        .post(api + 'login', login, httpOptions)
        .pipe(map(res => res));
    }
}
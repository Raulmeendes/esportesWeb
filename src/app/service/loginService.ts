  
import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, } from '@angular/common/http';
import { Observable } from 'rxjs';
import {map} from 'rxjs/operators';
import {Login} from '../models/loginModal'
import { Router } from '@angular/router';
import { FormBuilder } from '@angular/forms';
import {AuthenticationService} from '../service/authenticationService'

const httpOptions = {
  headers: new HttpHeaders({
    'Content-type': 'application/json'
  })
};

var apiUrl = 'localhost:8080';

@Injectable({
  providedIn: 'root'
})


export class LoginService {

    constructor(
      private httpClient: HttpClient,
      private router: Router,
      private authenticationService: AuthenticationService,
      private formBuilder: FormBuilder
      ) {
        
      }

      ngOnInit(){
        
      }

    logarUsuario(login: Login): Observable<any>{
        return this.httpClient
        .post(apiUrl + '/usuario', login, httpOptions)
        .pipe(map(res => res));
    }
}
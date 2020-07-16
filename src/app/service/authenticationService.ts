  
import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import {map} from 'rxjs/operators';
import {Login} from '../models/loginModal'
import { Router } from '@angular/router';
import { FormBuilder } from '@angular/forms';
//import {AuthenticationService} from '../service/authenticationService'

const httpOptions = {
  headers: new HttpHeaders({
    'Content-type': 'application/json'
  })
};


const headers = new Headers();
headers.append('Access-Control-Allow-Headers', 'Content-Type');
headers.append('Access-Control-Allow-Methods', 'GET, POST, DELETE, PUT');
headers.append('Access-Control-Allow-Origin', '*');
var apiUrl = 'localhost:8080';

@Injectable({
  providedIn: 'root'
})


export class AuthenticationService{
private currentUserSubject: BehaviorSubject<Login>;
public currentUser: Observable<Login>


    constructor(private httpClient: HttpClient){
        this.currentUserSubject = new BehaviorSubject<Login>(JSON.parse(localStorage.getItem('currentUser')));
        this.currentUser = this.currentUserSubject.asObservable();
    }

    public get currentUserValue(): Login{
        return this.currentUserSubject.value;
    }

    logarUsuario(email: string, senha: string){
        return this.httpClient.post<any>( apiUrl + '/login',{email, senha})
        .pipe(map(user => {
            if( user && user.token){
                localStorage.setItem('currentUser', JSON.stringify(user));
                this.currentUserSubject.next(user);
            }

            return user;
        }));


      
        // return this.httpClient
        // .post(apiUrl + '/login', login, httpOptions)
        // .pipe(map(res => res));
    }


    logout(){
        localStorage.removeItem('currentUser');
        this.currentUserSubject.next(null);
    }
}
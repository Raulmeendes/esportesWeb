import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder } from '@angular/forms';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Cadastro } from '../models/cadastro';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-type': 'application/json'

  })
} 

 var urlApi: 'https://api-sportes.herokuapp.com'

@Injectable({
  providedIn: 'root'
})
export class CadastroServiceService {

  constructor(
    private httpClient: HttpClient,
    private router: Router,
    private formBuilder: FormBuilder,

  ) { }

  cadastrarUsuario(usuarios: Cadastro): Observable<any> {
    return this.httpClient
    .post('https://api-sportes.herokuapp.com/api/usuarios', usuarios, httpOptions)
    .pipe(map(res => res))
  }
}

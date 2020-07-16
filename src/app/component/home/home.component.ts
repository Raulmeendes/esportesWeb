import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { AppComponent } from 'src/app/app.component';

import { LoginService } from 'src/app/service/loginService';
import {Login} from '../../models/loginModal'
import { AuthenticationService } from 'src/app/service/authenticationService';
import { pipe } from 'rxjs';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent  {
   
  loginForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),  
      senha: new FormControl('', [Validators.required, Validators.minLength(8)]),
    });
  returnUrl: string;
  submitted =  false;
    
    constructor(
      private loginService: LoginService, 
      private router: Router,
      private route: ActivatedRoute,
      private authenticationService: AuthenticationService,
      private formBuilder: FormBuilder)
       {
        if(this.authenticationService.currentUserValue){
          this.router.navigate(['/']);
        }
      }
    
    logar: Login;

  ngOnInit(): void {
  this.loginForm =  this.formBuilder.group({
    email: ['', Validators.required, Validators.email],
    senha: ['', Validators.required]
  });
    this.returnUrl =  this.route.snapshot.queryParams['retunrUrl'] || '/';
  }


    get f(){
        return this.loginForm.controls;
    }
     
    onSubmit(){
      this.submitted = true;
        if(this.loginForm.invalid){
          return;
        }

        this.authenticationService.logarUsuario(this.f.email.value, this.f.senha.value)
        .pipe(first())
        .subscribe(
          data => {
            alert("Login Efetuado com sucesso")
            this.router.navigate(['/esportes'])
          },
          error => {
            alert("Login Valido, Conexão viola as politicas do google")
          }

        // if(this.loginForm.status === 'VALID'){
        //   console.log(this.loginForm.value);
        // }
        )};
    
    setValue(){
        this.loginForm.setValue({senha: '', email: ''});
    }
    
    resetValue(){
        this.loginForm.reset({senha: '', email: ''});
   
    }   

    // logarUsuario(){
    //   if(this.loginForm.status === 'VALID'){
    //     this.loginService.logarUsuario(this.logar)
    //     .subscribe(
    //       usuarioLogado => this.logar = usuarioLogado,
    //       error => console.error(error))
    //       this.router.navigate(['/esportes'])
    //       alert("Login efetuado com sucesso")
    //   }else{
    //     alert("login invalido")
    //     this.router.navigate(['/cadastro'])
    //   }
    // }
  }
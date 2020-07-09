import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AppComponent } from 'src/app/app.component';
<<<<<<< Updated upstream
import { LoginService } from 'src/app/service/loginService';
import {Login} from '../../models/loginModal'
=======

import { Usuarios } from '../../models/usuarios'
import { Route } from '@angular/compiler/src/core'; 

>>>>>>> Stashed changes
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent  {
   
    form = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),  
      senha: new FormControl('', [Validators.required, Validators.minLength(8)]),
      
    });

<<<<<<< Updated upstream
    
    constructor(private loginService: LoginService, private router: Router) {}
    
    logar: Login;
=======
  constructor(private route: Router) {}

  model: any = {};
  user: Usuarios;
>>>>>>> Stashed changes

  ngOnInit(): void {
    this.setValue();
  }


    get f(){
        return this.form.controls;
    }
     
    submit(){
        if(this.form.status === 'VALID'){
          console.log(this.form.value);
        }
    }
    
    setValue(){
      if(this.form.status === 'VALID'){ 
      this.form.setValue({senha: '', email: ''});
      this.resetValue()
     //* alert()
      this.route.navigate(['/esportes']);
      }
    }
    
    resetValue(){
        this.form.reset({senha: '', email: ''});
    }   

<<<<<<< Updated upstream
    logarUsuario(){
      if(this.form.status === 'VALID'){
        this.loginService.logarUsuario(this.logar)
        .subscribe(
          usuarioLogado => this.logar = usuarioLogado,
          error => console.error(error))
          this.router.navigate(['/esportes'])
          alert("Login efetuado com sucesso")
      }else{
        alert("login invalido")
        this.router.navigate(['/cadastro'])
      }
    }
=======
    validateForm() {
      return this.user.email == '' ||
      this.user.senha == '';
    }
  

>>>>>>> Stashed changes
  }
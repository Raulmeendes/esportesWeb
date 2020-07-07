import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AppComponent } from 'src/app/app.component';
import { LoginService } from 'src/app/service/loginService';
import {Login} from '../../models/loginModal'
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

    
    constructor(private loginService: LoginService, private router: Router) {}
    
    logar: Login;

  ngOnInit(): void {
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
        this.form.setValue({senha: '', email: ''});
    }
    
    resetValue(){
        this.form.reset({senha: '', email: ''});
   
    }   

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
  }
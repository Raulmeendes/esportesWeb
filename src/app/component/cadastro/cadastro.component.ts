
import { Component, OnInit } from '@angular/core';
import { FormGroup, ValidatorFn, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';


import { AppComponent } from 'src/app/app.component';
import { Usuarios } from '../../models/usuarios'
import { Route } from '@angular/compiler/src/core';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})



export class CadastroComponent implements OnInit {

  form = new FormGroup({
    nomeCompleto: new FormControl('', [Validators.required]),
    cpf: new FormControl('', [Validators.required, Validators.maxLength(11),Validators.minLength(11)]),
    idade: new FormControl('', [Validators.required, Validators.maxLength(2)]),
    email: new FormControl('', [Validators.required, Validators.email]),
    senha: new FormControl('', [Validators.required, Validators.minLength(8)]),
    confirmarSenha: new FormControl('', [Validators.required, Validators.minLength(8)])
    

  });

  constructor(private route: Router) {}
 
  
  model: any = {};
  user: Usuarios;

  ngOnInit(): void {
    
  }


  get f() {
    return this.form.controls;
  }

  submit() {
    if (this.form.status === 'VALID') {
      console.log(this.form.value);
    }
  }

  setValue() {
    if(this.form.status === 'VALID'){
      this.form.setValue({ nomeCompleto: '', cpf: '', idade: '',  email: '', senha: '', confirmarSenha: '' });
      this.resetValue()
      alert("Cadastro Realizado com Sucesso")
      this.route.navigate(['/home']);
      }
  }

  resetValue() {
    this.form.reset({ nomeCompleto: '', cpf: '', idade: '',  email: '', senha: '', confirmarSenha: '' });
  }

 
  
}




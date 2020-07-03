
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
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
    cpf: new FormControl('', [Validators.required, Validators.maxLength(14)]),
    idade: new FormControl('', [Validators.required, Validators.maxLength(2)]),
    email: new FormControl('', [Validators.required, Validators.email]),
    senha: new FormControl('', [Validators.required, Validators.minLength(8)]),
    confirmaSenha: new FormControl('', [Validators.required, Validators.minLength(8)]),
  });

  constructor(private route: Router) { }
  
  model: any = {};
  user: Usuarios;

  ngOnInit(): void {
    this.setValue();
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
      this.form.setValue({ nomeCompleto: '', cpf: '', idade: '', senha: '', email: '', confirmaSenha: '' });
      this.resetValue()
      alert("cadastro efetuado com sucesso")
      this.route.navigate(['/home']);
      }
  }

  resetValue() {
    this.form.reset({ nomeCompleto: '', cpf: '', idade: '', senha: '', email: '', confirmaSenha: '' });
  }

  validateForm() {
    return this.user.nomeCompleto == '' ||
      this.user.cpf == null ||
      this.user.idade == '' ||
      this.user.email == '' ||
      this.user.senha == '' ||
      this.user.confirmaSenha == '';
  }

 
}




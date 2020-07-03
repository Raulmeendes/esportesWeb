
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AppComponent } from 'src/app/app.component';

  

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})

export class CadastroComponent implements OnInit {

    form = new FormGroup({
    nomecompleto: new FormControl('', [Validators.required]),
    cpf: new FormControl('', [Validators.required, Validators.maxLength(11)]),
    idade: new FormControl('', [Validators.required, Validators.maxLength(2)]),
    email: new FormControl('', [Validators.required, Validators.email]),
    senha: new FormControl('', [Validators.required, Validators.minLength(8)]),
    confirmaSenha: new FormControl('', [Validators.required, Validators.minLength(8)]),
  });
 
  constructor() {}

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
    this.form.setValue({nomecompleto: '', cpf: '', idade: '', senha: '', email: '', confirmasenha: ''});
}

resetValue(){
    this.form.reset({nomecompleto: '', cpf: '', idade: '', senha: '', email: '', confirmasenha: ''});
}  



}




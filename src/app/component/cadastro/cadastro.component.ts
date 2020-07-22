
import { Component, OnInit } from '@angular/core';
import { FormGroup, ValidatorFn, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AppComponent } from 'src/app/app.component';
import { Usuarios } from '../../models/usuarios'
import { Route } from '@angular/compiler/src/core';
import { CadastroServiceService } from 'src/app/service/cadastro-service.service';
import { Cadastro } from 'src/app/models/cadastro';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})



export class CadastroComponent implements OnInit {

  cadastroForm = new FormGroup({
    nomeCompleto: new FormControl('', [Validators.required]),
    cpf: new FormControl('', [Validators.required, Validators.maxLength(11),Validators.minLength(11)]),
    idade: new FormControl('', [Validators.required, Validators.maxLength(2)]),
    email: new FormControl('', [Validators.required, Validators.email]),
    senha: new FormControl('', [Validators.required, Validators.minLength(8)]),
    confirmarSenha: new FormControl('', [Validators.required, Validators.minLength(8)])
    

  });

  submitted = false;

  constructor(private router: Router, private formBuilder: FormBuilder, private cadastroService: CadastroServiceService) {}
 
  usuarios: Cadastro;
  model: any = {};
  user: Usuarios;

  ngOnInit(): void {

    this.cadastroForm = this.formBuilder.group({
      nomeCompleto: ['', Validators.required],
      cpf: ['', Validators.required, Validators.pattern('([0-9]{2}[\.]?[0-9]{3}[\.]?[0-9]{3}[\/]?[0-9]{4}[-]?[0-9]{2})|([0-9]{3}[\.]?[0-9]{3}[\.]?[0-9]{3}[-]?[0-9]{2})')],
      idade: ['', Validators.required],
      email: ['', Validators.required, Validators.email],
      senha: ['', Validators.required],
      confirmarSenha: ['', Validators.required]
    });
    
  }

  


  get f() {
    return this.cadastroForm.controls;
  }

  submit() {
    if (this.cadastroForm.status === 'VALID') {
      console.log(this.cadastroForm.value);
    }
  }

  onSubmit() {
    this.submitted = true;
    if(this.cadastroForm.invalid){
      return;
    }

    this.cadastroService.cadastrarUsuario(this.usuarios)
    .pipe(first())
    .subscribe(
      data => {
        alert("Cadastro efetuado com sucesso")
        this.router.navigate(['/home'])
      },
      error => {
        alert("erro")
      } 
    )


/*   if(this.cadastroForm.status === 'VALID'){
      this.cadastroForm.setValue({ nomeCompleto: '', cpf: '', idade: '',  email: '', senha: '', confirmarSenha: '' });
      this.resetValue()
      alert("Cadastro Realizado com Sucesso")
      this.router.navigate(['/home']);
      }
*/
  }

  resetValue() {
    this.cadastroForm.reset({ nomeCompleto: '', cpf: '', idade: '',  email: '', senha: '', confirmarSenha: '' });
  }

  
  
}




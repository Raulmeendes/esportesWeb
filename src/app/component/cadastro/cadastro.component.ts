
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


  constructor(private router: Router, private formBuilder: FormBuilder, private cadastroService: CadastroServiceService) {}
 
 
  novoCadastro: Cadastro;
  novosCadastros: Cadastro[];

  ngOnInit(): void {
    this.novoCadastro = new Cadastro();
  }



  limparCampos(){
    this.novoCadastro.nome == '' ||
    this.novoCadastro.email == '' ||
    this.novoCadastro.cpf == ''  ||
    this.novoCadastro.idade == null ||
    
    this.novoCadastro.senha == '' 
  }

  validarCampos(){
    return this.novoCadastro.nome == '' ||
    this.novoCadastro.email == '' ||
    this.novoCadastro.cpf == ''  ||
    this.novoCadastro.idade == null ||
   
    this.novoCadastro.senha == ''
  }

  enviarCadastro(){
    
    if(!this.validarCampos()){
     
      this.cadastroService.cadastrarUsuario(this.novoCadastro)
      .subscribe(
        user => this.adcUsuario = user, 
        
        error => console.error(error))
        alert("cadastro efetuado com sucesso")
       //this.router.navigate(['/home'])
      
      }else{
        alert("verifique os campos informados")
      }
      this.limparCampos()

  }
  adcUsuario(usuario: Cadastro){
    this.novosCadastros.push(usuario)

  }



}




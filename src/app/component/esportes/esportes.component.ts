import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AppComponent } from 'src/app/app.component';

import { Usuarios } from '../../models/usuarios'
import { Route } from '@angular/compiler/src/core';

@Component({
  selector: 'app-esportes',
  templateUrl: './esportes.component.html',
  styleUrls: ['./esportes.component.css']
})
export class EsportesComponent implements OnInit {

  form = new FormGroup({
    cidade: new FormControl('', [Validators.required]),  
    esportes: new FormControl('', [Validators.required]),
    leste: new FormControl('', [Validators.required])
  });

  constructor(private route: Router) { }

  model: any = {};
  user: Usuarios;

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
  this.form.setValue({cidade: '', esportes: '', leste: ''});
  this.resetValue()
  alert("Cadastro realizado")
  this.route.navigate(['/home']);
  }
}

resetValue(){
    this.form.reset({cidade: '', esportes: '', leste: ''});
}   

validateForm() {
  return this.user.cidade == '' ||
  this.user.esportes== ''||
  this.user.leste== '';
}

}

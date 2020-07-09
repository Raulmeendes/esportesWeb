import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { AppComponent } from 'src/app/app.component';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent implements OnInit {

  form = new FormGroup({
    cpf: new FormControl('', [Validators.required, Validators.maxLength(11),Validators.minLength(11)]),
    email: new FormControl('', [Validators.required, Validators.minLength(8)]),
    senha: new FormControl('', [Validators.required, Validators.minLength(8)]),
    confirmaSenha: new FormControl('', [Validators.required, Validators.minLength(8)]),

  });


  constructor() { }

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
    this.form.setValue({ cpf: '', email: '' });
  }

  resetValue() {
    this.form.reset({ cpf: '', email: '' });

  }


}


import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';



import { CadastroComponent } from './component/cadastro/cadastro.component';
import { HomeComponent } from './component/home/home.component';
import { ResetPasswordComponent } from './component/reset-password/reset-password.component';
import { EsportesComponent } from './component/esportes/esportes.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'cadastro', component: CadastroComponent},
  {path: 'resetPassword', component: ResetPasswordComponent},
  {path: 'esportes', component: EsportesComponent},
  
  {path: '', 
  redirectTo:'/home',
  pathMatch: 'full'}
];

@NgModule({

  imports: [RouterModule.forRoot(routes),
  FormsModule,
  ReactiveFormsModule,

  ],

  exports: [RouterModule]
})

export class AppRoutingModule { }



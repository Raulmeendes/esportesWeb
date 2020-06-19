import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CadastroComponent } from './component/cadastro/cadastro.component';
import { HomeComponent } from './component/home/home.component';


const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'cadastro', component: CadastroComponent},
  {path: '', 
  redirectTo:'/home',
  pathMatch: 'full'}
];

@NgModule({

  imports: [RouterModule.forRoot(routes),
  ReactiveFormsModule,
  FormsModule,

  ],

  exports: [RouterModule]
})
export class AppRoutingModule { }

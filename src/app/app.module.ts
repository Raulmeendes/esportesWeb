import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './component/home/home.component';
import { CadastroComponent } from './component/cadastro/cadastro.component';
import { ResetPasswordComponent } from './component/reset-password/reset-password.component';
import { EsportesComponent } from './component/esportes/esportes.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
<<<<<<< Updated upstream
import { HttpClientModule} from '@angular/common/http'
=======
import { from } from 'rxjs';  
import { ConfirmEqualValidatorDirective } from './component/cadastro/confirm-equal-validator.directive';


>>>>>>> Stashed changes

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CadastroComponent,
    ResetPasswordComponent,
    EsportesComponent,   
    ConfirmEqualValidatorDirective,
   
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
<<<<<<< Updated upstream
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
=======
    ReactiveFormsModule
   
    
>>>>>>> Stashed changes
  ],
  providers: [],
  bootstrap: [AppComponent]
})



export class AppModule { }

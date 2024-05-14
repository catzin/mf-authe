import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AutheRoutingModule } from './authe-routing.module';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { SharedModule } from '../../shared/shared.module';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RegisterFormComponent } from './components/register-form/register-form.component';


@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    LoginFormComponent, 
    RegisterFormComponent
  ],
  imports: [
    CommonModule,
    AutheRoutingModule,
    SharedModule,
    ReactiveFormsModule,
   
  ]
})
export class AutheModule { }

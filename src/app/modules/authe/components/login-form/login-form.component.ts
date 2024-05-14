import { Component, OnInit, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import PubSub from 'pubsub-js';
import { userInfo } from '../../../../core/models/user-info.interface';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrl: './login-form.component.scss'
})
export class LoginFormComponent implements OnInit{

  private readonly fb : FormBuilder = inject(FormBuilder);
  public loginForm !: FormGroup;
  private readonly router : Router = inject(Router)

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email : ['', [Validators.required]],
      pass : ['',[Validators.required]]
    })
  }

  public login():void{
   
    const {email, pass } = this.loginForm.value;
    if((email === 'catzin9617@gmail.com') && (pass === 'admin')){

      setTimeout(() => {

        const user : userInfo = {
          name : 'catzin',
          email:'catzin9617@gmail.com',
          token:'ksmsdiomomod3iewomdfio3mewd'
        }
        PubSub.publish('user_info',user);

      }) 
     
    
      this.router.navigateByUrl('/productos/list')
    } 
    
  }

  public toRegister():void{
    this.router.navigateByUrl('auth/register')
  }

}

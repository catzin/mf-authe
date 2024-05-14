import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrl: './register-form.component.scss'
})
export class RegisterFormComponent {

  private readonly fb : FormBuilder = inject(FormBuilder);
  public registerForm !: FormGroup;
  private readonly router : Router = inject(Router)

  ngOnInit(): void {
    this.registerForm = this.fb.group({
      name : ['', [Validators.required]],
      lastName : ['',[Validators.required]],
      email : ['',[Validators.required]],
      pass : ['',[Validators.required]],
      confirmPass : ['',[Validators.required]]
    })
  }

  public toLogin():void{
    this.router.navigateByUrl('/login');
  }

  public submitData():void{

    const {name, lastName} = this.registerForm.value;
    this.router.navigateByUrl('/productos/list');
  }


}

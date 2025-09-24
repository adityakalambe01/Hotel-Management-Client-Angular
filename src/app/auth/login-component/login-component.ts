import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {RouterLink} from '@angular/router';
import {AuthService} from '../../core/services/http/auth/auth-service';
import {IHttpErrorResponse, IHttpSuccessResponse} from '../../core/models';
import {Observable, Subscription} from 'rxjs';

@Component({
  selector: 'app-login-component',
  imports: [FormsModule, CommonModule, ReactiveFormsModule, RouterLink],
  templateUrl: './login-component.html',
  styleUrl: './login-component.css'
})
export class LoginComponent implements OnInit, OnDestroy{
  protected loginForm!: FormGroup;
  protected showPassword:boolean = false;
  protected isLoading:boolean = false;

  private loginSubscription!:Subscription;

  constructor(private authService:AuthService) {
  }

  ngOnInit() {
    this.initLoginForm()
  }

  initLoginForm(){
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email, Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')]),
      password: new FormControl('', [Validators.required]),
      remember: new FormControl(false)
    })
  }
  togglePassword(){
    this.showPassword = !this.showPassword;
  }

  handleSubmit(){
    const {email, password} = this.loginForm.value;
    this.loginSubscription = this.authService.login({email, password}).subscribe({
      next: (response:IHttpSuccessResponse)=>{
        console.log(response);
      },
      error: (error:IHttpErrorResponse)=>{
        console.log(error);
      },
      complete: ()=>{}
    })
  }


  ngOnDestroy() {
    this.authService.unsubscribe(this.loginSubscription);
  }


}

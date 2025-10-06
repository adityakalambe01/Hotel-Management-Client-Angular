import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {Router, RouterLink} from '@angular/router';
import {AuthService} from '../../core/services/http/auth/auth-service';
import {IHttpErrorResponse, IHttpSuccessResponse} from '../../core/models';
import {finalize, Subscription} from 'rxjs';
import {LucidIconWrapper} from '../../shared/components/lucid-icon-wrapper/lucid-icon-wrapper';
import {icons} from '../../core/constants';

@Component({
  selector: 'app-login-component',
  imports: [FormsModule, CommonModule, ReactiveFormsModule, RouterLink, LucidIconWrapper],
  templateUrl: './login-component.html',
  styleUrl: './login-component.css'
})
export class LoginComponent implements OnInit, OnDestroy{
  protected loginForm!: FormGroup;
  protected showPassword:boolean = false;
  protected isLoading:boolean = false;

  protected readonly icons = icons;

  private loginSubscription!:Subscription;

  constructor(private authService:AuthService, private router: Router) {
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
    this.isLoading = true;
    this.loginSubscription = this.authService.login({email, password}).pipe(finalize(()=> this.isLoading = false)).subscribe({
      next: (response:IHttpSuccessResponse)=>{
        this.authService.setToken(response.data.token);
        this.router.navigate(['/']);
      },
      error: (error:IHttpErrorResponse)=>{
        console.error(error);
      },
      complete: ()=>{}
    })
  }


  ngOnDestroy() {
    this.authService.unsubscribe(this.loginSubscription);
  }


}

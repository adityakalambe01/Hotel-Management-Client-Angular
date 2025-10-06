import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {RouterLink} from '@angular/router';
import {finalize, Subscription} from 'rxjs';
import {AuthService} from '../../core/services/http/auth/auth-service';
import {IHttpErrorResponse, IHttpSuccessResponse} from '../../core/models';
import {icons} from '../../core/constants/icon.constant';
import {LucidIconWrapper} from '../../shared/components/lucid-icon-wrapper/lucid-icon-wrapper';

@Component({
  selector: 'app-register-component',
  imports: [ReactiveFormsModule, CommonModule, FormsModule, RouterLink, LucidIconWrapper],
  templateUrl: './register-component.html',
  styleUrl: './register-component.css'
})
export class RegisterComponent implements OnInit, OnDestroy{
  protected registerForm!: FormGroup;
  protected showPassword = false;
  protected isLoading = false;
  private registerSubscription!:Subscription;

  protected readonly icons = icons

  constructor(private authService:AuthService) {
  }

  ngOnInit() {
    this.initRegistrationForm();
  }
  initRegistrationForm(){
    this.registerForm = new FormGroup({
      name: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      phone: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required, Validators.minLength(6)]),
      confirmPassword: new FormControl('', [Validators.required]),
      terms: new FormControl(false, [Validators.requiredTrue])
    });
  }




  togglePassword() {
    this.showPassword = !this.showPassword;
  }

  handleSubmit() {
    if (this.registerForm.valid) {
      this.isLoading = true;
      const {confirmPassword, terms, ...restFormData} = this.registerForm.value;
      this.registerSubscription = this.authService.register(restFormData).pipe(finalize(()=> this.isLoading=false)).subscribe({
        next: (response: IHttpSuccessResponse) => {
          console.log(response);
        },
        error: (error: IHttpErrorResponse) => {
          console.log(error);
        },
        complete: () => {
          this.isLoading = false;
        }
      })
    } else {
      this.registerForm.markAllAsTouched();
    }
  }

  ngOnDestroy() {
    this.authService.unsubscribe(this.registerSubscription);
  }
}

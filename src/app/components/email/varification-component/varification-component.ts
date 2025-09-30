import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, Router, RouterLink} from '@angular/router';
import {EmailService} from '../../../core/services/http/email/email-service';
import {IHttpErrorResponse, IHttpSuccessResponse} from '../../../core/models';
import {CommonModule, Location} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-varification-component',
  imports: [CommonModule, RouterLink, FormsModule],
  templateUrl: './varification-component.html',
  styleUrl: './varification-component.css'
})
export class VarificationComponent implements OnInit, OnDestroy{
  private emailSubscription!: Subscription;

  protected email: string = '';
  protected toShow = {
    emailVerification: {
      ui: false,
      loader: false,
    },
    resendVerification: {
      ui: false,
      loader: false,
    }
  }

  constructor(private activatedRoute: ActivatedRoute, private emailService: EmailService, private router: Router, private location: Location) {

  }

  ngOnInit() {
    const {token} = this.activatedRoute.snapshot.queryParams;
    if(token){
      this.toShow.emailVerification.ui = true;
      this.toShow.emailVerification.loader = true;
      this.verifyEmail(token);
    }else{
      this.location.replaceState('/resend-verification');
      this.toShow.resendVerification.ui = true;
    }
  }

  verifyEmail(token:string){
    this.emailSubscription = this.emailService.verifyEmail({token}).subscribe({
      next: (response: IHttpSuccessResponse)=>{
        this.router.navigate(['/'])
      },
      error: (error: IHttpErrorResponse)=>{
        console.error(error);
      },
      complete: ()=>{
        this.toShow.emailVerification.loader = false;

      }
    })
  }


  resendEmail(email: string) {
    if (!email) return;
    this.toShow.resendVerification.loader = true;
    this.emailSubscription = this.emailService.resendVerification({email}).subscribe({
      next: (response: IHttpSuccessResponse)=>{
        console.log(response);
      },
      error: (error: IHttpErrorResponse)=>{
        console.error(error);
      },
      complete: ()=>{
        this.toShow.resendVerification.loader = false;
      }
    })
  }

  ngOnDestroy() {
    this.emailService.unsubscribe(this.emailSubscription)
  }

}

import { Component } from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {CommonModule} from '@angular/common';

@Component({
  selector: 'app-auth-wrapper-component',
  imports: [CommonModule, RouterOutlet],
  templateUrl: './auth-wrapper-component.html',
  styleUrl: './auth-wrapper-component.css'
})
export class AuthWrapperComponent {
  isLogin = true;

  constructor() {
  }

}

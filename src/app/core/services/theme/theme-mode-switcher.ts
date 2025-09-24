import { Injectable } from '@angular/core';
import {LocalStorage} from '../storage/local-storage';

@Injectable({
  providedIn: 'root'
})
export class ThemeModeSwitcher {

  constructor(private localStorage: LocalStorage) {
  }
  getThemeMode() {
    return localStorage.getItem('themeMode');
  }

  toggleThemeMode() {
    if (this.getThemeMode() === 'dark') {
      localStorage.setItem('themeMode', 'light');
      document.documentElement.classList.remove('dark');
      document.documentElement.classList.add('light');
    } else {
      localStorage.setItem('themeMode', 'dark');
      document.documentElement.classList.remove('light');
      document.documentElement.classList.add('dark');
    }
  }


}

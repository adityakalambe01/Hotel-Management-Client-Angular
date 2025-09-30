import { Injectable } from '@angular/core';
import {LocalStorage} from '../storage/local-storage';

@Injectable({
  providedIn: 'root'
})
export class ThemeModeSwitcher {

  constructor(private localStorage: LocalStorage) {
    document.documentElement.classList.add(this.getThemeMode() || 'light');

  }
  getThemeMode() {
    return this.localStorage.getItem('themeMode');
  }

  toggleThemeMode() {
    if (this.getThemeMode() === 'dark') {
      this.localStorage.setItem('themeMode', 'light');
      document.documentElement.classList.remove('dark');
      document.documentElement.classList.add('light');
    } else {
      this.localStorage.setItem('themeMode', 'dark');
      document.documentElement.classList.remove('light');
      document.documentElement.classList.add('dark');
    }
  }


}

import { Component } from '@angular/core';
import {ThemeModeSwitcher} from '../../core/services/theme/theme-mode-switcher';

@Component({
  selector: 'app-theme-toggle-component',
  imports: [],
  templateUrl: './theme-toggle-component.html',
  styleUrl: './theme-toggle-component.css'
})
export class ThemeToggleComponent {

  constructor(private theme:ThemeModeSwitcher) {
  }
  toggleTheme() {

    this.theme.toggleThemeMode();
  }

  isDarkMode(){
    return this.theme.getThemeMode() === 'dark'
  }

}

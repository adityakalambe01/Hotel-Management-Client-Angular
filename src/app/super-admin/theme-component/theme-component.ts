import { Component } from '@angular/core';
import {ThemeToggleComponent} from '../../components/theme-toggle-component/theme-toggle-component';

@Component({
  selector: 'app-theme-component',
  imports: [ThemeToggleComponent],
  templateUrl: './theme-component.html',
  styleUrl: './theme-component.css'
})
export class ThemeComponent {

}

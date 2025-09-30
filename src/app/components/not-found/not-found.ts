import { Component } from '@angular/core';
import {RouterLink} from '@angular/router';
import {icons} from '../../core/constants';

@Component({
  selector: 'app-not-found',
  imports: [RouterLink],
  templateUrl: './not-found.html',
  styleUrl: './not-found.css'
})
export class NotFound {

  protected readonly icons = icons;

  goBack() {
    window.history.back();
  }
}

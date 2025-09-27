import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Tabs} from './tabs';



@NgModule({
  declarations: [Tabs],
  imports: [
    CommonModule
  ],
  exports: [Tabs],
})
export class TabsModule { }

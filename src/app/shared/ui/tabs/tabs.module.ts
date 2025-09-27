import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Tab, TabGroup, TabPanel} from './tabs';



@NgModule({
  declarations: [TabGroup, Tab, TabPanel],
  imports: [
    CommonModule
  ],
  exports: [TabGroup, Tab, TabPanel],
})
export class TabsModule { }

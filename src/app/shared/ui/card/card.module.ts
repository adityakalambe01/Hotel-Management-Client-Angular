import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Card, CardAction, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from './card'

@NgModule({
  declarations: [
    Card,
    CardHeader,
    CardTitle,
    CardDescription,
    CardAction,
    CardContent,
    CardFooter
  ],
  imports: [CommonModule],
  exports: [
    Card,
    CardHeader,
    CardTitle,
    CardDescription,
    CardAction,
    CardContent,
    CardFooter
  ]
})
export class CardModule {}

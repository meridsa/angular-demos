import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PaperRoutingModule } from './paper-routing.module';
import { PaperComponent } from './paper.component';
import { BasicLineComponent } from './basic-line/basic-line.component';


@NgModule({
  declarations: [
    PaperComponent,
    BasicLineComponent
  ],
  imports: [
    CommonModule,
    PaperRoutingModule
  ]
})
export class PaperModule { }

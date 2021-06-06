import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BasicLineComponent } from './basic-line/basic-line.component';
import { PaperComponent } from './paper.component';

const routes: Routes = [
  {
    path: '',
    component: PaperComponent,
    children: [
      {
        path: 'basic-line',
        component: BasicLineComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PaperRoutingModule { }

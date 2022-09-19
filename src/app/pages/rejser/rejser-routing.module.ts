import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RejserPage } from './rejser.page';

const routes: Routes = [
  {
    path: '',
    component: RejserPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RejserPageRoutingModule {}

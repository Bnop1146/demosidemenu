import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TegneserierPage } from './tegneserier.page';

const routes: Routes = [
  {
    path: '',
    component: TegneserierPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TegneserierPageRoutingModule {}

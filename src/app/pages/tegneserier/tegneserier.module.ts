import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TegneserierPageRoutingModule } from './tegneserier-routing.module';

import { TegneserierPage } from './tegneserier.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TegneserierPageRoutingModule
  ],
  declarations: [TegneserierPage]
})
export class TegneserierPageModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RejserPageRoutingModule } from './rejser-routing.module';

import { RejserPage } from './rejser.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RejserPageRoutingModule
  ],
  declarations: [RejserPage]
})
export class RejserPageModule {}

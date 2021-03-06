import { ComponentsModule } from '../../components/components.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LoyaltyPageRoutingModule } from './loyalty-routing.module';

import { LoyaltyPage } from './loyalty.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LoyaltyPageRoutingModule,
    ComponentsModule
  ],
  declarations: [LoyaltyPage]
})
export class LoyaltyPageModule { }

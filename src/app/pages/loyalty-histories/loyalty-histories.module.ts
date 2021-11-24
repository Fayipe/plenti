import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LoyaltyHistoriesPageRoutingModule } from './loyalty-histories-routing.module';

import { LoyaltyHistoriesPage } from './loyalty-histories.page';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LoyaltyHistoriesPageRoutingModule,
    ComponentsModule
  ],
  declarations: [LoyaltyHistoriesPage]
})
export class LoyaltyHistoriesPageModule {}

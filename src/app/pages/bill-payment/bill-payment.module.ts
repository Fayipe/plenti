import { ComponentsModule } from '../../components/components.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BillPaymentPageRoutingModule } from './bill-payment-routing.module';

import { BillPaymentPage } from './bill-payment.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BillPaymentPageRoutingModule,
    ReactiveFormsModule,
    ComponentsModule
  ],
  declarations: [BillPaymentPage]
})
export class BillPaymentPageModule { }

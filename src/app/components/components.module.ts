import { LoyaltyCardComponent } from './loyalty-card/loyalty-card.component';
import { MomentModule } from 'ngx-moment';
import { AuthContainerComponent } from './auth-container/auth-container.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { PhoneVerifyComponent } from './phone-verify/phone-verify.component';
import { PinVerifyComponent } from './pin-verify/pin-verify.component';
import { HeaderContainerComponent } from './header-container/header-container.component';
import { BillingCardComponent } from './billing-card/billing-card.component';
import { OfferCardComponent } from './offer-card/offer-card.component';
import { BillsCardComponent } from './bills-card/bills-card.component';
import { LocationNearbyCardComponent } from './location-nearby-card/location-nearby-card.component';
import { LoyaltyHistoryComponent } from './loyalty-history/loyalty-history.component';
import { NearbyCardComponent } from './nearby-card/nearby-card.component';
import { NotificationCardComponent } from './notification-card/notification-card.component';
import { ResponseCardComponent } from './response-card/response-card.component';
import { AirtimeCardComponent } from './airtime-card/airtime-card.component';
import { CabletvCardComponent } from './cabletv-card/cabletv-card.component';
import { DataBundleCardComponent } from './data-bundle-card/data-bundle-card.component';
import { ElectricityCardComponent } from './electricity-card/electricity-card.component';
import { AmountsCardComponent } from './amounts-card/amounts-card.component';



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    MomentModule
  ],
  declarations: [
    AuthContainerComponent,
    PhoneVerifyComponent,
    PinVerifyComponent,
    HeaderContainerComponent,
    BillingCardComponent,
    OfferCardComponent,
    BillsCardComponent,
    LocationNearbyCardComponent,
    LoyaltyCardComponent,
    LoyaltyHistoryComponent,
    NearbyCardComponent,
    NotificationCardComponent,
    ResponseCardComponent,
    AirtimeCardComponent,
    CabletvCardComponent,
    DataBundleCardComponent,
    ElectricityCardComponent,
    AmountsCardComponent
  ],
  exports: [
    AuthContainerComponent,
    PhoneVerifyComponent,
    PinVerifyComponent,
    HeaderContainerComponent,
    BillingCardComponent,
    OfferCardComponent,
    BillsCardComponent,
    LocationNearbyCardComponent,
    LoyaltyCardComponent,
    LoyaltyHistoryComponent,
    NearbyCardComponent,
    NotificationCardComponent,
    ResponseCardComponent,
    AirtimeCardComponent,
    CabletvCardComponent,
    DataBundleCardComponent,
    ElectricityCardComponent,
    AmountsCardComponent
  ],
  entryComponents: [
  ],
  providers: []

})
export class ComponentsModule { }

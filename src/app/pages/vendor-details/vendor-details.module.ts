import { ComponentsModule } from '../../components/components.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VendorDetailsPageRoutingModule } from './vendor-details-routing.module';

import { VendorDetailsPage } from './vendor-details.page';
import { HeaderColor } from '@ionic-native/header-color/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VendorDetailsPageRoutingModule,
    ComponentsModule
  ],
  declarations: [VendorDetailsPage],
  providers: [HeaderColor, StatusBar]
})
export class VendorDetailsPageModule { }

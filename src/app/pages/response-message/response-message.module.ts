import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ResponseMessagePageRoutingModule } from './response-message-routing.module';

import { ResponseMessagePage } from './response-message.page';
import { HeaderColor } from '@ionic-native/header-color/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ResponseMessagePageRoutingModule
  ],
  declarations: [ResponseMessagePage],
  providers: [HeaderColor, StatusBar]
})
export class ResponseMessagePageModule { }

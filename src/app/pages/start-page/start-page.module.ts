import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { StartPagePageRoutingModule } from './start-page-routing.module';

import { StartPagePage } from './start-page.page';
import { HeaderColor } from '@ionic-native/header-color/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    StartPagePageRoutingModule
  ],
  declarations: [StartPagePage],
  providers: [HeaderColor, StatusBar]
})
export class StartPagePageModule { }

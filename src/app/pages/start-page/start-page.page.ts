import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { SIGNUP, LOGIN } from '../pages.constants';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { HeaderColor } from '@ionic-native/header-color/ngx';
//declare const NavigationBar: any;

@Component({
  selector: 'page-start-page',
  templateUrl: './start-page.page.html',
  styleUrls: ['./start-page.page.scss'],
})
export class StartPagePage implements OnInit {

  constructor(private headerColor: HeaderColor, private statusBar: StatusBar, private navCtrl: NavController) {
    this.statusBar.styleLightContent();
    this.statusBar.backgroundColorByHexString('#950404');
    this.headerColor.tint('#E30060');
   //NavigationBar.backgroundColorByHexString("#950404");
  }

  ngOnInit() {
  }
  ionViewWillEnter() {
    this.statusBar.styleLightContent();
    this.statusBar.backgroundColorByHexString('#950404');
    this.headerColor.tint('#E30060');
   //NavigationBar.backgroundColorByHexString("#950404");
  }
  goToSignUpPage() {
    this.navCtrl.navigateForward(SIGNUP);
  }
  goToLoginPage() {
    this.navCtrl.navigateForward(LOGIN);
  }
}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HeaderColor } from '@ionic-native/header-color/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { NavController } from '@ionic/angular';
import { TABS } from '../pages.constants';

@Component({
  selector: 'app-response-message',
  templateUrl: './response-message.page.html',
  styleUrls: ['./response-message.page.scss'],
})
export class ResponseMessagePage implements OnInit {
  responseData: any;
  responseType: any;
  constructor(private router: Router, private route: ActivatedRoute, private navCtrl: NavController,
    private headerColor: HeaderColor, private statusBar: StatusBar) {
    this.route.queryParams.subscribe(params => {
      if (this.router.getCurrentNavigation().extras) {
        this.responseData = JSON.parse(this.router.getCurrentNavigation().finalUrl.queryParams.special);
        console.log("user responseData", this.responseData);
        this.responseType = this.responseData.responseType;
      }
    });
    this.statusBar.styleLightContent();
    this.statusBar.backgroundColorByHexString('#F6E58D');
    this.headerColor.tint('#F6E58D');
  }

  ngOnInit() {
  }
  ionViewWillEnter() {
    this.statusBar.styleLightContent();
    this.statusBar.backgroundColorByHexString('#F6E58D');
    this.headerColor.tint('#F6E58D');
    //NavigationBar.backgroundColorByHexString("#950404");
  }
  gotoHome() {
    this.navCtrl.navigateRoot(TABS);
  }
}

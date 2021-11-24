import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HeaderColor } from '@ionic-native/header-color/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-vendor-details',
  templateUrl: './vendor-details.page.html',
  styleUrls: ['./vendor-details.page.scss'],
})
export class VendorDetailsPage implements OnInit {

  constructor(private headerColor: HeaderColor, private statusBar: StatusBar, private navCtrl: NavController, private router: Router) {
    this.statusBar.styleLightContent();
    this.statusBar.backgroundColorByHexString('#FFFFFF');
    this.headerColor.tint('#1E2023');
    //NavigationBar.backgroundColorByHexString("#FFFFFF");
  }

  ngOnInit() {
  }
  ionViewWillEnter() {
    this.statusBar.styleLightContent();
    this.statusBar.backgroundColorByHexString('#FFFFFF');
    this.headerColor.tint('#1E2023');
    //NavigationBar.backgroundColorByHexString("#FFFFFF");
  }
  goBack() {
    this.navCtrl.pop();
  }
  gotoTab(tab_path) {
    this.router.navigateByUrl(tab_path);
  }
}

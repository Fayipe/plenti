import { Component } from '@angular/core';
import { HeaderColor } from '@ionic-native/header-color/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {

  constructor(private headerColor: HeaderColor, private statusBar: StatusBar) {
    this.statusBar.styleLightContent();
    this.statusBar.backgroundColorByHexString('#950404');
    this.headerColor.tint('#E30060');
  }
  ionViewWillEnter() {
    this.statusBar.styleLightContent();
    this.statusBar.backgroundColorByHexString('#950404');
    this.headerColor.tint('#E30060');
    //NavigationBar.backgroundColorByHexString("#950404");
  }
}

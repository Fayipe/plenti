import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { HeaderColor } from '@ionic-native/header-color/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { IonSlides } from '@ionic/angular';
import { START_PAGE } from '../pages.constants';
//declare const NavigationBar: any;

@Component({
  selector: 'app-onboarding',
  templateUrl: './onboarding.page.html',
  styleUrls: ['./onboarding.page.scss'],
})
export class OnboardingPage implements OnInit {
  @ViewChild(IonSlides, { static: true }) slides: IonSlides;

  constructor(private headerColor: HeaderColor, private statusBar: StatusBar, private router: Router) {
    this.statusBar.styleDefault();
    this.statusBar.backgroundColorByHexString('#FFFFFF');
    this.headerColor.tint('#1E2023');
  }

  ngOnInit() {
  }
  ionViewWillEnter() {
    this.statusBar.styleDefault();
    this.statusBar.backgroundColorByHexString('#FFFFFF');
    this.headerColor.tint('#1E2023');
    //NavigationBar.backgroundColorByHexString("#950404");
  }
  async navigationHandler(skip = false) {
    if (skip || await this.slides.isEnd()) {
      this.router.navigate([START_PAGE]);
    } else {
      this.slides.slideNext();
    }
  }

}

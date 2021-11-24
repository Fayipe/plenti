import { Helpers } from '../../app.helpers';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { BILL_PAYMENT, LOYALTY_HISTORY_PAGE } from '../pages.constants';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  bills: any = [
    { id: 1, name: 'Airtime', slug: 'airtime', icon: 'call.svg' },
    { id: 2, name: 'Data Bundle', slug: 'data-bundle', icon: 'data_bundle.svg' },
    { id: 3, name: 'Electricity', slug: 'electricity', icon: 'electricity.svg' },
    { id: 4, name: 'Cable TV', slug: 'cabletv', icon: 'cabletv.svg' }
  ];
  constructor(private router: Router, private navCtrl: NavController, private _helpers: Helpers) {
  }

  ngOnInit() {
  }
  gotoTab(tab_path) {
    this.router.navigateByUrl(tab_path);
  }
  gotoHistory() {
    this.navCtrl.navigateForward(LOYALTY_HISTORY_PAGE)
  }
  activatebillType(dataObject) {
    console.log(dataObject);
    this.navCtrl.navigateForward(BILL_PAYMENT, this._helpers.buildQueryParam(dataObject));
  }
}

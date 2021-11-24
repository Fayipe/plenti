import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { VENDOR_DETAILS_PAGE } from '../../pages/pages.constants';

@Component({
  selector: 'app-nearby-card',
  templateUrl: './nearby-card.component.html',
  styleUrls: ['./nearby-card.component.scss'],
})
export class NearbyCardComponent implements OnInit {
  @Input() nearBys: any;

  constructor(private router: Router, private navCtrl: NavController) { }

  ngOnInit() { }
  gotoVendorDetails() {
    this.navCtrl.navigateForward(VENDOR_DETAILS_PAGE);
  }
}

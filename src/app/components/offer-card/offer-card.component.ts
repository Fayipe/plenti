import { Component, Input, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { OFFER_DETAILS_PAGE } from '../../pages/pages.constants';

@Component({
  selector: 'app-offer-card',
  templateUrl: './offer-card.component.html',
  styleUrls: ['./offer-card.component.scss'],
})
export class OfferCardComponent implements OnInit {
  @Input() pageType: any;
  @Input() feature: any;

  constructor(private navCtrl: NavController) { }

  ngOnInit() { }
  gotoVendorDetails() {
    this.navCtrl.navigateForward(OFFER_DETAILS_PAGE);
  }
}

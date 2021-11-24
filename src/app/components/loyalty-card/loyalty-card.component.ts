import { Component, Input, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { LOYALTY_DETAILS_PAGE } from '../../pages/pages.constants';

@Component({
  selector: 'app-loyalty-card',
  templateUrl: './loyalty-card.component.html',
  styleUrls: ['./loyalty-card.component.scss'],
})
export class LoyaltyCardComponent implements OnInit {
  @Input() loyalties: any;

  constructor(private navCtrl: NavController) { }

  ngOnInit() { }

  gotoLoyaltyDetails() {
    this.navCtrl.navigateForward(LOYALTY_DETAILS_PAGE);
  }
}

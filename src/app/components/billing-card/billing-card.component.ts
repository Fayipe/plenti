import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { AppModalPage } from '../../pages/app-modal/app-modal.page';

@Component({
  selector: 'app-billing-card',
  templateUrl: './billing-card.component.html',
  styleUrls: ['./billing-card.component.scss'],
})
export class BillingCardComponent implements OnInit {

  constructor(private modalCtrl: ModalController) { }

  ngOnInit() { }
  async openAppModal() {
    const modal = await this.modalCtrl.create({
      component: AppModalPage,
      cssClass: 'custom-modal burn-option-modal',
      componentProps: { 'modalType': "burnPoints" }
    });
    modal.onDidDismiss().then((modelData) => {
      if (modelData !== null) {
        // this.modelData = modelData.data;
        console.log('Modal Data : ' + modelData.data);
      }
    });

    return await modal.present();
  }
}

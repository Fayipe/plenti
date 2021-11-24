import { Helpers } from '../../app.helpers';
import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { AppModalPage } from '../app-modal/app-modal.page';

@Component({
  selector: 'app-offer-details',
  templateUrl: './offer-details.page.html',
  styleUrls: ['./offer-details.page.scss'],
})
export class OfferDetailsPage implements OnInit {
  uploadImage: boolean = false;
  imageResponse: any;
  constructor(private modalCtrl: ModalController, private _helpers: Helpers) { }

  ngOnInit() {
  }
  async uploadReceipt() {
    const modal = await this.modalCtrl.create({
      component: AppModalPage,
      cssClass: 'custom-modal burn-option-modal',
      componentProps: { 'modalType': "redeemOffer" }
    });
    modal.onDidDismiss().then((modelData) => {
      if (modelData !== null) {
        // this.modelData = modelData.data;
        console.log('Modal Data : ' + modelData.data);
        if (modelData?.data?.image) {
          this.imageResponse = modelData.data.image;
        }
      }
    });
    return await modal.present();
  }
  deleteImage(img) {
    this.imageResponse = '';
    this._helpers.createNativeToast('Image removed.');
  }
}


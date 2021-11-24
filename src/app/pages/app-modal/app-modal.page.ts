import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Component, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController, NavController } from '@ionic/angular';
import { BILL_PAYMENT, GENERATE_VOUCHER, RESPONSE_MESSAGE_PAGE } from '../pages.constants';
import { Helpers } from '../../app.helpers';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';

@Component({
  selector: 'app-app-modal',
  templateUrl: './app-modal.page.html',
  styleUrls: ['./app-modal.page.scss'],
})
export class AppModalPage implements OnInit {
  @Input() modalType: any
  promoCodeForm: FormGroup;
  imageResponse: any;
  constructor(private modalCntrl: ModalController, private router: Router, private camera: Camera,
    private navCtrl: NavController, private formBuild: FormBuilder, private _helpers: Helpers) { }

  ngOnInit() {
    this.createPromoCodeForm();
  }
  createPromoCodeForm() {
    this.promoCodeForm = this.formBuild.group({
      code: new FormControl('', Validators.required),
    });
  }

  gotoBurnPoint(page: any) {
    this.closeModel();
    page == 'voucher' ? this.navCtrl.navigateForward([GENERATE_VOUCHER]) : this.navCtrl.navigateForward([BILL_PAYMENT]);
  }

  async closeModel() {
    const close: string = "Modal Closed";
    await this.modalCntrl.dismiss(close);
  }

  async inputPromoCode(page) {
    this.modalType = page;
  }

  async redeemOffer(formData) {
    await this.modalCntrl.dismiss();
    this.navCtrl.navigateForward(RESPONSE_MESSAGE_PAGE, this._helpers.buildQueryParam({ data: formData, responseType: 'redeem-success' }));
  }
  async pickImage(uploadFrom) {
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.FILE_URI,
      encodingType: this.camera.EncodingType.PNG,
      saveToPhotoAlbum: false,
      mediaType: this.camera.MediaType.PICTURE,
      targetHeight: 360,
      targetWidth: 360,
    };
    options.sourceType = uploadFrom == 'Camera' ? this.camera.PictureSourceType.CAMERA : this.camera.PictureSourceType.PHOTOLIBRARY;
    this.camera.getPicture(options)
      .then(async res => {
        this.imageResponse = (window as any).Ionic.WebView.convertFileSrc(res);
        await this.modalCntrl.dismiss({ image: this.imageResponse, upload: res });
      }).catch(error => {
        console.error('Error getting image: ', error);
      });
  }
}

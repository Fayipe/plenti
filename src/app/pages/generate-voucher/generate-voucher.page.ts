import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { NavController } from '@ionic/angular';
import { Helpers } from '../../app.helpers';
import { RESPONSE_MESSAGE_PAGE } from '../pages.constants';

@Component({
  selector: 'app-generate-voucher',
  templateUrl: './generate-voucher.page.html',
  styleUrls: ['./generate-voucher.page.scss'],
})
export class GenerateVoucherPage implements OnInit {
  voucherForm: FormGroup;
  burnPin: boolean = false;
  subHead = 'Kindly enter your 4-digit pin to confirm voucher generation of ₦9000';

  constructor(private formBuild: FormBuilder, private navCtrl: NavController, private _helpers: Helpers) { }

  ngOnInit() {
    this.createVoucherForm();
  }
  createVoucherForm() {
    this.voucherForm = this.formBuild.group({
      voucher_type: new FormControl('', Validators.compose([Validators.required])),
      amount: new FormControl('', Validators.compose([Validators.required])),
    });
  }
  generateHandler() {
    this.burnPin = true;
  }
  displayResult(data) {
    this.navCtrl.navigateForward(RESPONSE_MESSAGE_PAGE, this._helpers.buildQueryParam({ data, responseType: 'bill-success' }));
  }
}

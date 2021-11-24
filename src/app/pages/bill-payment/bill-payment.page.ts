import { ValidationMessages } from '../../validators/validator.messages';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { NavController } from '@ionic/angular';
import { Helpers } from '../../app.helpers';
import { RESPONSE_MESSAGE_PAGE } from '../pages.constants';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-bill-payment',
  templateUrl: './bill-payment.page.html',
  styleUrls: ['./bill-payment.page.scss'],
})
export class BillPaymentPage implements OnInit {
  billForm: FormGroup;
  telCodes: any;
  userSelectedTelCode = '+234';
  fullPhoneNumber: string;
  validation_messages: any = ValidationMessages;
  error: any = {
    message: '',
    status: ''
  };
  billType: any = 'start';
  subHead: any;
  billPaymentData: any;
  airtimes: any = [
    { id: 1, name: '₦100', amount: 100 },
    { id: 2, name: '₦200', amount: 200 },
    { id: 3, name: '₦300', amount: 300 },
    { id: 4, name: '₦400', amount: 400 }
  ];
  dataBundles: any = [
    { id: 1, name: '₦100 - 50MB', amount: 100 },
    { id: 2, name: '₦200 - 100MB', amount: 200 },
    { id: 3, name: '₦500 - 750MB', amount: 500 },
    { id: 4, name: '₦1000 -1GB', amount: 400 },
    { id: 4, name: '₦1500 - 2GB', amount: 1500 },
    { id: 4, name: '₦2000 - 3GB', amount: 2000 },
  ];
  cabletvPrices: any = [
    { id: 1, name: 'GoLive - ₦2100', amount: 2100 },
    { id: 2, name: 'GoLive - ₦3200', amount: 3200 },
    { id: 3, name: 'GoLive - ₦4900', amount: 4900 },
    { id: 4, name: 'GoLive - ₦6300', amount: 6300 },
    { id: 4, name: 'GoLive - ₦9000', amount: 9000 },
    { id: 4, name: 'GoLive - ₦11400', amount: 11400 },
    { id: 4, name: 'GoLive - ₦15300', amount: 15300 },
  ];
  bills: any = [
    { id: 1, name: 'Airtime', slug: 'airtime', icon: 'call.svg' },
    { id: 2, name: 'Data Bundle', slug: 'data-bundle', icon: 'data_bundle.svg' },
    { id: 3, name: 'Electricity', slug: 'electricity', icon: 'electricity.svg' },
    { id: 4, name: 'Cable TV', slug: 'cabletv', icon: 'cabletv.svg' }
  ];

  constructor(private formBuild: FormBuilder, private _helpers: Helpers, private navCtrl: NavController,
    private route: ActivatedRoute, private router: Router) {
    this.route.queryParams.subscribe(params => {
      if (this.router.getCurrentNavigation().finalUrl.queryParams.special) {
        this.billPaymentData = JSON.parse(this.router.getCurrentNavigation().finalUrl.queryParams.special);
        console.log("user responseData", this.billPaymentData);
        this.billType = this.billPaymentData?.billType;
        this.subHead = this.billPaymentData?.subHead;
      }
    });
  }

  ngOnInit() {
    this.createBillForm()
  }
  createBillForm() {
    this.billForm = this.formBuild.group({
      voucher_type: new FormControl('', Validators.compose([Validators.required])),
      network: new FormControl('', Validators.compose([Validators.required])),
      amount: new FormControl('', Validators.compose([Validators.required])),
      phone_number: new FormControl('', Validators.compose([
        Validators.required,
        Validators.minLength(7),
        Validators.pattern('^[\\d-()+ ]{7,}$')
      ])),
      country_code: new FormControl(this.userSelectedTelCode, Validators.required),
    });
  }
  displayResult(data) {
    this.navCtrl.navigateForward(RESPONSE_MESSAGE_PAGE, this._helpers.buildQueryParam({ data, responseType: 'bill-success' }));
  }
  activatebillType(dataObject: any) {
    this.billType = dataObject.billType;
    this.subHead = dataObject.subHead;
  }
}

import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { ValidationMessages } from '../../validators/validator.messages';

@Component({
  selector: 'app-data-bundle-card',
  templateUrl: './data-bundle-card.component.html',
  styleUrls: ['./data-bundle-card.component.scss'],
})
export class DataBundleCardComponent implements OnInit {
  @Output() billType: EventEmitter<Object> = new EventEmitter();
  @Input() dataBundles;
  dataBundleForm: FormGroup;
  telCodes: any;
  userSelectedTelCode = '+234';
  fullPhoneNumber: string;
  validation_messages: any = ValidationMessages;
  error: any = {
    message: '',
    status: ''
  };//
  constructor(private formBuild: FormBuilder) { }
  // this.chatMessageForm.value.text

  ngOnInit() {
    this.createBillForm()
  }
  createBillForm() {
    this.dataBundleForm = this.formBuild.group({
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
  generateHandler() {
    this.billType.emit({ billType: 'pin', subHead: 'Kindly enter your 4-digit pin to confirm voucher generation of ₦9000' });
  }
  setAmount(dataObject) {
    console.log('dataObject', dataObject);
    this.dataBundleForm.controls.amount.setValue(dataObject.amount);
    console.log('billForm', this.dataBundleForm.value);
  }
  /**
    * Allow the select dropdown
    * to display only the dial code
    */
  displayOnlyDialCode() {
    this.userSelectedTelCode = this.dataBundleForm.get('country_code').value;
  }

  /**
     * Joins country code and phone number
     *
     */
  getFullPhoneNumber() {
    let telNumber = this.dataBundleForm.value.phone_number;
    if (telNumber[0] === '0') {
      telNumber = this.dataBundleForm.value.phone_number.substring(1);
    }
    return this.fullPhoneNumber = this.dataBundleForm.value.country_code + telNumber;
  }
}

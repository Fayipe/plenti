import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { ValidationMessages } from '../../validators/validator.messages';

@Component({
  selector: 'app-airtime-card',
  templateUrl: './airtime-card.component.html',
  styleUrls: ['./airtime-card.component.scss'],
})
export class AirtimeCardComponent implements OnInit {
  @Output() billType: EventEmitter<Object> = new EventEmitter();
  @Input() airtimes;
  billForm: FormGroup;
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
  generateHandler() {
    this.billType.emit({ billType: 'pin', subHead: 'Kindly enter your 4-digit pin to confirm voucher generation of <span>₦9000</span>' });
  }
  setAmount(dataObject) {
    console.log('dataObject', dataObject);
    this.billForm.controls.amount.setValue(dataObject.amount);
    console.log('billForm', this.billForm.value);
  }
  /**
    * Allow the select dropdown
    * to display only the dial code
    */
  displayOnlyDialCode() {
    this.userSelectedTelCode = this.billForm.get('country_code').value;
  }

  /**
     * Joins country code and phone number
     *
     */
  getFullPhoneNumber() {
    let telNumber = this.billForm.value.phone_number;
    if (telNumber[0] === '0') {
      telNumber = this.billForm.value.phone_number.substring(1);
    }
    return this.fullPhoneNumber = this.billForm.value.country_code + telNumber;
  }
}

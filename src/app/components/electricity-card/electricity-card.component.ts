import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { ValidationMessages } from '../../validators/validator.messages';

@Component({
  selector: 'app-electricity-card',
  templateUrl: './electricity-card.component.html',
  styleUrls: ['./electricity-card.component.scss'],
})
export class ElectricityCardComponent implements OnInit {
  @Output() billType: EventEmitter<Object> = new EventEmitter();
  @Input() dataBundles;
  electricityForm: FormGroup;
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
    this.electricityForm = this.formBuild.group({
      voucher_type: new FormControl('', Validators.compose([Validators.required])),
      bill_type: new FormControl('', Validators.compose([Validators.required])),
      provider: new FormControl('', Validators.compose([Validators.required])),
      amount: new FormControl('', Validators.compose([Validators.required])),
      meter_number: new FormControl('', Validators.compose([Validators.required])),
    });
  }
  generateHandler() {
    this.billType.emit({ billType: 'pin', subHead: 'Kindly enter your 4- digit pin to confirm Cable TV payment of ₦900 for Gotv (01101010101)' });
  }
}

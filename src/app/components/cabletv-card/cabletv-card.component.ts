import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { ValidationMessages } from '../../validators/validator.messages';

@Component({
  selector: 'app-cabletv-card',
  templateUrl: './cabletv-card.component.html',
  styleUrls: ['./cabletv-card.component.scss'],
})
export class CabletvCardComponent implements OnInit {
  @Output() billType: EventEmitter<Object> = new EventEmitter();
  @Input() cabletvPrices;
  @Input() dataBundles;
  cabletvForm: FormGroup;
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
    this.cabletvForm = this.formBuild.group({
      voucher_type: new FormControl('', Validators.compose([Validators.required])),
      provider: new FormControl('', Validators.compose([Validators.required])),
      amount: new FormControl('', Validators.compose([Validators.required])),
      cable_number: new FormControl('', Validators.compose([Validators.required])),
    });
  }
  generateHandler() {
    this.billType.emit({ billType: 'pin', subHead: 'Kindly enter your 4- digit pin to confirm Cable TV payment of ₦900 for Gotv (01101010101)' });
  }
  setAmount(dataObject) {
    console.log('dataObject', dataObject);
    this.cabletvForm.controls.amount.setValue(dataObject.amount);
    console.log('billForm', this.cabletvForm.value);
  }
}

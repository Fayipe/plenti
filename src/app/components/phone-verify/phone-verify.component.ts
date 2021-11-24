import { ValidationMessages } from '../../validators/validator.messages';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CountryCodesService } from '../../services/country-codes/country-codes.service';

@Component({
  selector: 'app-phone-verify',
  templateUrl: './phone-verify.component.html',
  styleUrls: ['./phone-verify.component.scss'],
})
export class PhoneVerifyComponent implements OnInit {
  @Output() toVerify: EventEmitter<String> = new EventEmitter();
  phoneVerifyForm: FormGroup;
  telCodes: any;
  userSelectedTelCode = '+234';
  fullPhoneNumber: string;
  validation_messages: any = ValidationMessages;
  error: any = {
    message: '',
    status: ''
  };

  constructor(private formBuild: FormBuilder, private router: Router, private countryCodes: CountryCodesService) { }

  ngOnInit() {
    this.telCodes = this.countryCodes.countryCodes;
    this.createPhoneVerifyForm();
  }
  createPhoneVerifyForm() {
    this.phoneVerifyForm = this.formBuild.group({
      phone_number: new FormControl('', Validators.compose([
        Validators.required,
        Validators.minLength(7),
        Validators.pattern('^[\\d-()+ ]{7,}$')
      ])),
      country_code: new FormControl(this.userSelectedTelCode, Validators.required),
    });
  }
  verifyPhoneNumber() {
    this.toVerify.emit('verify');
  }
  /**
    * Allow the select dropdown
    * to display only the dial code
    */
  displayOnlyDialCode() {
    this.userSelectedTelCode = this.phoneVerifyForm.get('country_code').value;
  }
}

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ValidationMessages } from '../../validators/validator.messages';
import { CountryCodesService } from '../../services/country-codes/country-codes.service';
import { LOGIN, SIGNUP_VERIFY } from '../pages.constants';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  type = 'password';
  telCodes: any;
  signupForm: FormGroup;
  showPassword = false;
  fullPhoneNumber: string;
  userSelectedTelCode = '+234';
  validation_messages: any = ValidationMessages;
  error: any = {
    message: '',
    status: ''
  };
  regType = 'signup';
  authState = new BehaviorSubject(false);

  constructor(private router: Router, private countryCodes: CountryCodesService, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.telCodes = this.countryCodes.countryCodes;
    this.createSignupForm();
  }
  createSignupForm() {
    this.signupForm = this.formBuilder.group({
      first_name: new FormControl('', {
        validators: [Validators.required, Validators.minLength(2)]
      }),
      last_name: new FormControl('', {
        validators: [Validators.required, Validators.minLength(2)]
      }),
      middle_name: new FormControl('', {
        validators: [Validators.required, Validators.minLength(2)]
      }),
      email: new FormControl('', Validators.compose([
        Validators.required,
        Validators.pattern('^([a-zA-Z0-9_\\-.]+)@([a-zA-Z0-9_\\-.]+)\\.([a-zA-Z]{2,})$')
      ])),
      password: new FormControl('', {
        validators: [Validators.required, Validators.minLength(6)]
      })
    });
  }
  gotoLogin() {
    this.router.navigate([LOGIN]);
  }
  createAccountHandler() {
    this.regType = 'phone-verify';
    // return this.router.navigate([SIGNUP_VERIFY]);
  }
  createPinHandler(createPin) {
    console.log("createPin>>>", createPin);
    this.regType = createPin;
  }
  verifyPhone(toVerify) {
    this.regType = toVerify;
  }
  /**
 * Toggle between visible
 * or hidden passwords
 */
  toggleShowPassword() {
    this.showPassword = !this.showPassword;
    this.showPassword ? this.type = 'text' : this.type = 'password';
  }
  /**
     * Allow the select dropdown
     * to display only the dial code
     */
  displayOnlyDialCode() {
    this.userSelectedTelCode = this.signupForm.get('country_code').value;
  }

  /**
     * Joins country code and phone number
     *
     */
  getFullPhoneNumber() {
    let telNumber = this.signupForm.value.phone_number;
    if (telNumber[0] === '0') {
      telNumber = this.signupForm.value.phone_number.substring(1);
    }
    return this.fullPhoneNumber = this.signupForm.value.country_code + telNumber;
  }
}

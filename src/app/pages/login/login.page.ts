import { NavController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { Helpers } from '../../app.helpers';
import { CountryCodesService } from '../../services/country-codes/country-codes.service';
import { ValidationMessages } from '../../validators/validator.messages';
import { SIGNUP, TABS } from '../pages.constants';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  loginForm: FormGroup;
  backdropVisible = false;
  authState = new BehaviorSubject(false);
  telCodes: any;
  userSelectedTelCode = '+234';
  fullPhoneNumber: string;
  validation_messages: any = ValidationMessages;
  error: any = {
    message: '',
    status: ''
  };
  authType = 'login';

  constructor(private formBuild: FormBuilder, private router: Router,
    private countryCodes: CountryCodesService, private _helpers: Helpers, private navCtrl: NavController) { }

  ngOnInit() {
    this.telCodes = this.countryCodes.countryCodes;
    this.createLoginForm();
  }
  createLoginForm() {
    this.loginForm = this.formBuild.group({
      phone_number: new FormControl('', Validators.compose([
        Validators.required,
        Validators.minLength(7),
        Validators.pattern('^[\\d-()+ ]{7,}$')
      ])),
      password: new FormControl(''),
      country_code: new FormControl(this.userSelectedTelCode, Validators.required),
    });
  }
  onLogin(loginData) {
    console.log(loginData);
    // this.authType = 'verify';
    this._helpers.createSuccessToast('Login successful');
    this.navCtrl.navigateRoot(TABS);
  }
  activateLogin(data) {
    this.authType = 'login';
  }
  gotoSignUp() {
    this.router.navigate([SIGNUP]);
  }
  loginHandler(dataReturn) {
    console.log("dataReturn", dataReturn);
    this._helpers.createSuccessToast('Login successful');
    this.navCtrl.navigateRoot(TABS);
  }
  /**
     * Allow the select dropdown
     * to display only the dial code
     */
  displayOnlyDialCode() {
    this.userSelectedTelCode = this.loginForm.get('country_code').value;
  }

  /**
     * Joins country code and phone number
     *
     */
  getFullPhoneNumber() {
    let telNumber = this.loginForm.value.phone_number;
    if (telNumber[0] === '0') {
      telNumber = this.loginForm.value.phone_number.substring(1);
    }
    return this.fullPhoneNumber = this.loginForm.value.country_code + telNumber;
  }
}

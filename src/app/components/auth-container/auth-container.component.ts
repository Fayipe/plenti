import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { IonInput, NavController } from '@ionic/angular';
import { LOGIN, TABS } from '../../pages/pages.constants';

@Component({
  selector: 'app-auth-container',
  templateUrl: './auth-container.component.html',
  styleUrls: ['./auth-container.component.scss'],
})
export class AuthContainerComponent implements OnInit {
  @Input() authType: any = 'verify';
  @Output() toLogin: EventEmitter<String> = new EventEmitter();
  @Output() createPin: EventEmitter<String> = new EventEmitter();
  constructor(private router: Router, private navCtrl: NavController) { }

  ngOnInit() { }
  handleKeyEvent(evt: KeyboardEvent, nextInput: IonInput, prevInput: IonInput) {
    const input: string = (evt.target as any).value;
    console.log(evt, input);
    if (!input.length && evt.code == 'Backspace') {
      prevInput.setFocus();
    }
  }

  verifyPhone() {
    console.log('veriphone');
    this.createPin.emit('create');
    // this.authType = 'pin';
    // this.navCtrl.navigateRoot(TABS);
  }
  loginAccount() {

  }
  gotoLogin() {
    console.log("to login");
    this.toLogin.emit('LOGIN');
  }
}

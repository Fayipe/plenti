import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { NavController, IonInput } from '@ionic/angular';
import { TABS } from '../../pages/pages.constants';

@Component({
  selector: 'app-pin-verify',
  templateUrl: './pin-verify.component.html',
  styleUrls: ['./pin-verify.component.scss'],
})
export class PinVerifyComponent implements OnInit {
  @Input() pinType: any = 'create';
  @Input() subHead: any;
  @Output() pinResult: EventEmitter<any> = new EventEmitter();
  constructor(private router: Router, private navCtrl: NavController) { }
  ngOnInit() { }

  handleKeyEvent(evt: KeyboardEvent, nextInput: IonInput, prevInput: IonInput) {
    const input: string = (evt.target as any).value;
    console.log(evt, input);
    if (!input.length && evt.code == 'Backspace') {
      prevInput.setFocus();
    }
  }

  createPin() {
    this.pinType = 'confirm';
    // this.navCtrl.navigateRoot(TABS);
  }
  confirmPin() {
    this.navCtrl.navigateRoot(TABS);
  }
  confirmBurnPin() {
    let dataObjct = {};
    this.pinResult.emit(dataObjct);
  }
  gotoLogin() { }
}

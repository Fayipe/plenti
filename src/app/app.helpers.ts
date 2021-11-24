import { Toast } from '@ionic-native/toast/ngx';
import {
  LoadingController, AlertController, ToastController, Platform, NavController,
  ModalController, ActionSheetController
} from '@ionic/angular';
import { Events } from './services/helpers/events';
import { Storage } from '@ionic/storage-angular';
import { Injectable } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { NavigationOptions } from '@ionic/angular/providers/nav-controller';
import { ModalOptions, AlertButton, ActionSheetOptions } from '@ionic/core';
import { Subscription } from 'rxjs';
import { StorageKey, EventsType } from './app.enums';
import { User } from './models/user';
import { NavigationExtras } from '@angular/router';
import { LoadingBarService } from '@ngx-loading-bar/core';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';


/**
 *  Helper class for commonly used methods
 *
 * @export
 * @class CommonMethods
 */
@Injectable({
  providedIn: 'root'
})
export class Helpers {

  imagesDownloading: Array<string> = [];
  private _navParam: any;
  loading: HTMLIonLoadingElement;
  cache: any;
  registerBackButton: Subscription;
  errorToast: HTMLIonToastElement;
  isErrorToastShown: boolean;
  activePage: any;
  unreadNotificationsCount = 0;
  unreadChatsCount = 0;
  poorNetwork: boolean = false;


  constructor(
    private _loader: LoadingBarService,
    private events: Events,
    // private segment: SegmentService,
    // private clipboard: Clipboard,
    private actionSheetCtrl: ActionSheetController, private modalCtrl: ModalController,
    private navCtrl: NavController, private toast: Toast, private platform: Platform,
    private toastCtrl: ToastController, private alertCtrl: AlertController,
    public storage: Storage, private camera: Camera,
    private loadingCtrl: LoadingController,
    // private socialSharing: SocialSharing
  ) {
    console.log('helper');
  }

  imgLoaded(event: CustomEvent, skeletonText) {
    const el = event.target as HTMLElement;
    el.classList.remove('img-hidden');
    skeletonText.el.remove();
  }

  /**
   * Returns dirty values of a formgroup
   *
   * @param {FormGroup} formGrop
   * @returns
   * @memberof Helpers
   */
  getDirtyValues(formGrop: FormGroup) {
    const dirtyValues = {};
    Object.keys(formGrop.controls).forEach(control => {
      const currentControl = formGrop.get(control);

      if (currentControl.dirty) {
        dirtyValues[control] = currentControl.value;
      }
    });
    return dirtyValues;
  }

  copyStoreLink(storeUrl) {
    // this.clipboard.copy(storeUrl)
    //   .then(() => {
    //     this.segment.track("action:store_link_copied", { link: storeUrl }).then();
    //     return this.createNativeToast("Copied store link to clipboard!");
    //   }).catch(() => {
    //     this.segment.track("error:store_link_not_copied", { link: storeUrl }).then();
    //     this.createErrorToast("Failed to copy store link!");
    //   });
  }

  /**
   * Creates modal using modal controller
   *
   * @param {ModalOptions} [options]
   * @returns
   * @memberof Helpers
   */
  createModal(options?: ModalOptions) {
    return this.modalCtrl.create(options);
  }


  navPush(page: string, data: any = null) {
    this._navParam = data;
    return this.navCtrl.navigateForward(page);
  }

  setRoot(page: string, data: any = null, navOptions?: NavigationOptions) {
    this._navParam = data;
    if (navOptions) {
      return this.navCtrl.navigateRoot(page, navOptions);
    }
    return this.navCtrl.navigateRoot(page);
  }

  navPop(data: any = null) {
    this._navParam = data;
    return this.navCtrl.pop();
  }

  get navParams() {
    return this._navParam;
  }

  getNavParams(key: string = null) {
    if (this._navParam && key) {
      return this._navParam[key];
    }
    return this._navParam;
  }


  createAlert(message = '', header = '', subHeader = '', buttonText = 'OK') {
    return this.alertCtrl.create({
      header,
      subHeader,
      message,
      buttons: [
        {
          text: buttonText,
        },
      ]
    });
  }

  createAlertWithHandler(message = '', buttons: Array<AlertButton>, header = '', subHeader = '') {
    return this.alertCtrl.create({
      header,
      subHeader,
      message,
      buttons
    });
  }


  /**
   *
   *  Creates a native toast
   * @param {string} message
   * @param {string} [position='bottom']
   * @param {number} [duration=3000]
   * @returns {Observable}
   * @memberof CommonMethods
   */
  async createNativeToast(message: string, position: string = 'bottom', duration: number = 3000) {
    return await this.toast.showWithOptions({
      message,
      position,
      duration
    }).toPromise();
  }
  async createNotificationToast(message: string, position: string = 'bottom', duration: number = 5000) {
    try {
      return await this.toast.showWithOptions({
        message,
        position,
        duration,
        addPixelsY: -170,
        styling: { backgroundColor: '#5c53ef', textColor: '#ffffff', cornerRadius: 20, horizontalPadding: 10, verticalPadding: 10 }
      }).toPromise();
    } catch (error) {
      console.error(error);
    }
  }
  async createLoader(message = '', cssClass = '') {
    this.registerBackButton = this.handleBackButton();
    this.loading = await this.loadingCtrl.create({
      message,
      cssClass
    });

    this.loading.onDidDismiss().then(() => this.registerBackButton.unsubscribe());
    this.loading.present();
    return this.loading;
  }
  share(message: any, subject: any, url: any = '', image: any = '') {
    return null; // this.socialSharing.share(message, subject, image, url);
  }
  save(key: StorageKey, value) {
    return this.storage.set(key, value);
  }

  get(key: StorageKey) {
    return this.storage.get(key);
  }
  removeFromDB(key: StorageKey) {
    return this.storage.remove(key);
  }
  dismissLoader() {
    try {
      this.loading.dismiss();
    } catch (error) {
      console.warn('loader dismissed', error);
    }
  }

  updatePushSettings(value: boolean) {
    return this.storage.set('allowPush', value);
  }

  getPushSettings() {
    return this.storage.get('allowPush');
  }

  async createSuccessToast(message = '', cssClass = 'success-toast') {
    const toast = await this.toastCtrl.create({
      message,
      duration: 3000,
      cssClass,
      color: 'secondary',
      mode: 'ios'
    });
    toast.present();
  }

  async createErrorToast(message = '', cssClass = 'error-toast') {
    if (this.isErrorToastShown) {
      this.dismissErrorToast();
    }
    this.errorToast = await this.toastCtrl.create({
      message,
      duration: 3000,
      cssClass,
      mode: 'ios',
      color: 'danger',

    });
    this.isErrorToastShown = true;
    this.errorToast.present();
    this.errorToast.onDidDismiss().then(() => {
      this.isErrorToastShown = false;
    });

    return this.errorToast;
  }

  dismissErrorToast() {
    if (this.errorToast) {
      this.errorToast.dismiss();
    }
  }

  clearDb() {
    return this.storage.clear();
  }
  /**
   *
   * helper to get user profile
   * @returns {Promise<User>} User profile
   * @memberof CommonMethods
   */
  async getUser(): Promise<User> {
    return await this.storage.get(StorageKey.user);
  }


  /**
   * Updates user profile on local db
   *
   * @param {User} user
   * @memberof CommonMethods
   */
  async updateUserProfile(user: User) {
    this.storage.set(StorageKey.user, user);
  }


  /**
   * Handles back button action
   *
   * @param {Function} [customHandler=() => { }]
   * @returns Unregister
   * @memberof CommonMethods
   */
  handleBackButton(customHandler: Function = () => { }) {
    return this.platform.backButton.subscribeWithPriority(100, customHandler());
  }

  noWhitespaceValidator(control: FormControl) {
    const isWhitespace = String((control.value || '')).trim().length === 0;
    const isValid = !isWhitespace;
    return isValid ? null : { whitespace: true };
  }

  capitalizeText(text: string) {
    const wordsArray = text.toLowerCase().split(' ');
    const capsArray = wordsArray.map(word => {
      return word[0].toUpperCase() + word.slice(1);
    });
    return capsArray.join(' ');
  }


  /**
   * Generate slug from store handle
   *
   * @param {string} storeName
   * @returns
   * @memberof Helpers
   */
  slugify(storeName: string) {
    return storeName
      .toString()
      .toLowerCase()
      .replace(/\s+/g, '_') // Replace spaces with _
      .replace(/[^\w\-]+/g, '') // Remove all non-word chars
      .replace(/\-\-+/g, '-') // Replace multiple - with single -
      .replace(/^-+/, '') // Trim - from start of text
      .replace(/-+$/, ''); // Trim - from end of text
  }

  sortAlphabetically(arr: any[], property?: string) {
    return arr.sort((a, b) => {
      if (property) {
        return a[property].toLowerCase() < b[property].toLowerCase() ? -1 : 1;
      }
      return a.toLowerCase() < b.toLowerCase() ? -1 : 1;
    });
  }

  /**
   * Emit an event using ion-events
   *
   * @param {EventsType} event
   * @param {...any[]} args
   * @memberof Helpers
   */
  publishEvent(event: EventsType, ...args: any[]) {
    return this.events.publish(event, ...args);
  }


  /**
   * Subscribe to an event using ion-events
   *
   * @param {EventsType} event
   * @param {...Function[]} handlers
   * @memberof Helpers
   */
  subscribeToEvent(event: EventsType, ...handlers: any[]) {
    // return this.events.subscribe(event, ...handlers);
  }
  buildQueryParam(paramData: any) {
    const navigationExtras: NavigationExtras = {
      queryParams: {
        special: JSON.stringify(paramData)
      }
    };
    return navigationExtras;
  }
  createActionSheet(opts: ActionSheetOptions) {
    return this.actionSheetCtrl.create(opts);
  }
  showProgressBar() {
    this._loader.start();
  }

  stopProgressBar() {
    this._loader.complete();
  }

  async fetchUnreadsChat() {
    const chats = await this.get(StorageKey.chatList);
    let count = 0;
    if (chats) {
      chats.forEach(element => {
        count = (count + element.unread_count);
      });
    }
    this.unreadChatsCount = count;
    console.log(`unreadChatsCount -` + this.unreadChatsCount);
  }
  cameraOption() {
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.FILE_URI,
      encodingType: this.camera.EncodingType.PNG,
      saveToPhotoAlbum: false,
      mediaType: this.camera.MediaType.PICTURE,
      sourceType: 0,
      targetHeight: 360,
      targetWidth: 360,
    };
    return options;
  }
}

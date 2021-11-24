import { Injectable, NgModule } from '@angular/core';
import { BrowserModule, HammerGestureConfig } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { IonicModule, IonicRouteStrategy, NavParams } from '@ionic/angular';
import { IonicStorageModule } from "@ionic/storage-angular";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HeaderInterceptor } from './interceptors/header-interceptor';
import { RequestInterceptor } from './interceptors/request-interceptor';
import { Helpers } from './services/helpers/helpers.service';
import { Toast } from '@ionic-native/toast/ngx';
import { LoadingBarService } from '@ngx-loading-bar/core';
import { AuthGuard } from './guards/auth.guard';
import { Camera } from '@ionic-native/camera/ngx';
import { GooglePlus } from "@ionic-native/google-plus/ngx";
import { SwiperModule } from 'swiper/angular';

/**
 * @hidden
 * This class overrides the default Angular gesture config.
 */
declare module '@angular/core' {
  interface ModuleWithProviders<T = any> {
    ngModule: Type<T>;
    providers?: Provider[];
  }
}
@Injectable()
export class IonicGestureConfig extends HammerGestureConfig {
  buildHammer(element: HTMLElement) {
    const mc = new (window as any).Hammer(element);

    for (const eventName in this.overrides) {
      if (eventName) {
        mc.get(eventName).set(this.overrides[eventName]);
      }
    }

    return mc;
  }
}

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule.forRoot(),
    IonicStorageModule.forRoot({
      name: 'fillcart',
      storeName: 'user',
      driverOrder: ['sqlite', 'indexeddb', 'websql']
    }),
    SwiperModule
  ],
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    { provide: HammerGestureConfig, useClass: IonicGestureConfig },
    { provide: HTTP_INTERCEPTORS, useClass: HeaderInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: RequestInterceptor, multi: true },
    Helpers,
    Toast,
    LoadingBarService,
    RequestInterceptor,
    AuthGuard,
    NavParams,
    Camera,
    GooglePlus,
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: '/onboarding', pathMatch: 'full' },
  {
    path: 'onboarding',
    loadChildren: () => import('./pages/onboarding/onboarding.module').then(m => m.OnboardingPageModule)
  },
  {
    path: 'tabs',
    loadChildren: () => import('./pages/tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'start-page',
    loadChildren: () => import('./pages/start-page/start-page.module').then(m => m.StartPagePageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./pages/register/register.module').then(m => m.RegisterPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then(m => m.LoginPageModule)
  },
  {
    path: 'notification',
    loadChildren: () => import('./pages/notification/notification.module').then(m => m.NotificationPageModule)
  },
  {
    path: 'generate-voucher',
    loadChildren: () => import('./pages/generate-voucher/generate-voucher.module').then(m => m.GenerateVoucherPageModule)
  },
  {
    path: 'bill-payment',
    loadChildren: () => import('./pages/bill-payment/bill-payment.module').then(m => m.BillPaymentPageModule)
  },
  {
    path: 'response-message',
    loadChildren: () => import('./pages/response-message/response-message.module').then(m => m.ResponseMessagePageModule)
  },
  {
    path: 'loyalty-histories',
    loadChildren: () => import('./pages/loyalty-histories/loyalty-histories.module').then(m => m.LoyaltyHistoriesPageModule)
  },
  {
    path: 'vendor-details',
    loadChildren: () => import('./pages/vendor-details/vendor-details.module').then(m => m.VendorDetailsPageModule)
  },
  {
    path: 'offer-details',
    loadChildren: () => import('./pages/offer-details/offer-details.module').then(m => m.OfferDetailsPageModule)
  },
  {
    path: 'upload-modal',
    loadChildren: () => import('./pages/upload-modal/upload-modal.module').then(m => m.UploadModalPageModule)
  },
  {
    path: 'app-modal',
    loadChildren: () => import('./pages/app-modal/app-modal.module').then(m => m.AppModalPageModule)
  },
  {
    path: 'loyalty-details',
    loadChildren: () => import('./pages/loyalty-details/loyalty-details.module').then(m => m.LoyaltyDetailsPageModule)
  },
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

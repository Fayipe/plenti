import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoyaltyDetailsPage } from './loyalty-details.page';

const routes: Routes = [
  {
    path: '',
    component: LoyaltyDetailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LoyaltyDetailsPageRoutingModule {}

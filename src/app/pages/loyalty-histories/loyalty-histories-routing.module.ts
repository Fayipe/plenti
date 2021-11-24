import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoyaltyHistoriesPage } from './loyalty-histories.page';

const routes: Routes = [
  {
    path: '',
    component: LoyaltyHistoriesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LoyaltyHistoriesPageRoutingModule {}

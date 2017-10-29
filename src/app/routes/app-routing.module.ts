import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomePageComponent } from '../components/home-page/home-page.component';

import { CategoryPageComponent } from '../components/category-page/category-page.component';
  import { CategoryItemsComponent } from '../components/category-page/category-items/category-items.component';

import { ProductPageComponent } from '../components/product-page/product-page.component';
  import { ProductDataComponent } from '../components/product-page/product-data/product-data.component';

import { BasketPageComponent } from '../components/basket-page/basket-page.component';
  import { BasketItemsComponent } from '../components/basket-page/basket-items/basket-items.component';
  import { EmptyBasketComponent } from '../components/basket-page/empty-basket/empty-basket.component';

import { NotFoundPageComponent } from '../components/not-found-page/not-found-page.component';
import { NoSearchResultPageComponent } from '../components/no-search-result-page/no-search-result-page.component';

import { PurchasePagesComponent } from '../components/purchase-pages/purchase-pages.component';
  import { UserDataComponent } from '../components/purchase-pages/user-data/user-data.component';
  import { PaymentSettingsComponent } from '../components/purchase-pages/payment-settings/payment-settings.component';
  import { BasketSummaryComponent } from '../components/purchase-pages/basket-summary/basket-summary.component';
  import { ThankYouPageComponent } from '../components/purchase-pages/thank-you-page/thank-you-page.component';



const appRoutes: Routes = [
  {path: '', component: HomePageComponent, pathMatch: 'full'},
  {path: 'c/:catId', component: CategoryPageComponent, pathMatch: 'full'},
  {path: 'c/:catId/p/:prodId', component: ProductPageComponent},
  {path: 'cart', component: BasketPageComponent},
  {path: 'order', component: PurchasePagesComponent},
  {path: 'search/:query/noproduct', component: NoSearchResultPageComponent},
  {path: '**', component: NotFoundPageComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule]
})

export class RoutingModule { }
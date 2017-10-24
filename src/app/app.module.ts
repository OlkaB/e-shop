import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RoutingModule } from './routes/app-routing.module';

import { HomePageComponent } from './components/home-page/home-page.component';
import { CategoryPageComponent } from './components/category-page/category-page.component';
  import { CategoryItemsComponent } from './components/category-page/category-items/category-items.component';
import { ProductPageComponent } from './components/product-page/product-page.component';
  import { ProductDataComponent } from './components/product-page/product-data/product-data.component';
import { BasketPageComponent } from './components/basket-page/basket-page.component';
  import { BasketItemsComponent } from './components/basket-page/basket-items/basket-items.component';
  import { EmptyBasketComponent } from './components/basket-page/empty-basket/empty-basket.component';
import { NotFoundPageComponent } from './components/not-found-page/not-found-page.component';
import { NoSearchResultPageComponent } from './components/no-search-result-page/no-search-result-page.component';
import { PurchasePagesComponent } from './components/purchase-pages/purchase-pages.component';
  import { UserDataComponent } from './components/purchase-pages/user-data/user-data.component';
  import { PaymentSettingsComponent } from './components/purchase-pages/payment-settings/payment-settings.component';
  import { BasketSummaryComponent } from './components/purchase-pages/basket-summary/basket-summary.component';
  import { ThankYouPageComponent } from './components/purchase-pages/thank-you-page/thank-you-page.component';
import { BreadcrumbsComponent } from './components/a-shared-components/breadcrumbs/breadcrumbs.component';
import { CurrentCategoriesComponent } from './components/a-shared-components/current-categories/current-categories.component';
import { FooterComponent } from './components/a-shared-components/footer/footer.component';
import { HeaderComponent } from './components/a-shared-components/header/header.component';


@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    CategoryPageComponent,
    CategoryItemsComponent,
    ProductPageComponent,
    ProductDataComponent,
    BasketPageComponent,
    EmptyBasketComponent,
    NotFoundPageComponent,
    NoSearchResultPageComponent,
    PurchasePagesComponent,
    UserDataComponent,
    PaymentSettingsComponent,
    BasketSummaryComponent,
    ThankYouPageComponent,
    BreadcrumbsComponent,
    CurrentCategoriesComponent,
    FooterComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    RoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
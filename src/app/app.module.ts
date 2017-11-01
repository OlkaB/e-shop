import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RoutingModule } from './routes/app-routing.module';

import { ProductsService } from './services-and-models/products.service';
import { CategoriesService } from './services-and-models/categories.service';
import { CurrentUserDataService } from './services-and-models/current-user-data.service';
import { PopupAddToCartService } from './services-and-models/popup-add-to-cart.service';

import { HomePageComponent } from './components/home-page/home-page.component';
import { CategoryPageComponent } from './components/category-page/category-page.component';
  import { CategoryItemsComponent } from './components/category-page/category-items/category-items.component';
import { ProductPageComponent } from './components/product-page/product-page.component';
  import { ProductDataComponent } from './components/product-page/product-data/product-data.component';
import { BasketPageComponent } from './components/basket-page/basket-page.component';
  import { BasketItemsComponent } from './components/basket-page/basket-items/basket-items.component';
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
import { ProductRatingComponent } from './components/a-shared-components/product-rating/product-rating.component';
import { AddBasketPopupComponent } from './components/a-shared-components/add-basket-popup/add-basket-popup.component';
import { GetCartItemDataPipe } from './pipes/get-cart-item-data.pipe';
import { ShowOldPriceConditionPipe } from './pipes/show-old-price-condition.pipe';


@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    CategoryPageComponent,
    CategoryItemsComponent,
    ProductPageComponent,
    ProductDataComponent,
    BasketPageComponent,
    BasketItemsComponent,
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
    HeaderComponent,
    ProductRatingComponent,
    AddBasketPopupComponent,
    GetCartItemDataPipe,
    ShowOldPriceConditionPipe
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RoutingModule
  ],
  entryComponents: [AddBasketPopupComponent],
  providers: [CategoriesService, ProductsService, CurrentUserDataService, PopupAddToCartService],
  bootstrap: [AppComponent]
})
export class AppModule { }

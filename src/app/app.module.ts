import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { RoutingModule } from './routes/app-routing.module';
import { FormsModule } from '@angular/forms';

/* services */
import { ProductsService } from './services-and-models/products.service';
import { CategoriesService } from './services-and-models/categories.service';
import { CurrentUserDataService } from './services-and-models/current-user-data.service';
import { PopupAddToCartService } from './services-and-models/popup-add-to-cart.service';
import { ProductsOpinionsService } from './services-and-models/products-opinions.service';
import { StarRatingService } from './services-and-models/star-rating.service';

/* components */
import { HomePageComponent } from './components/home-page/home-page.component';
import { CategoryPageComponent } from './components/category-page/category-page.component';
  import { CategoryItemsComponent } from './components/category-page/category-items/category-items.component';
import { ProductPageComponent } from './components/product-page/product-page.component';
  import { ProductDataComponent } from './components/product-page/product-data/product-data.component';
import { BasketPageComponent } from './components/basket-page/basket-page.component';
  import { BasketItemsComponent } from './components/basket-page/basket-items/basket-items.component';
import { NotFoundPageComponent } from './components/not-found-page/not-found-page.component';
import { SearchResultPageComponent } from './components/search-result-page/search-result-page.component';
import { PurchasePagesComponent } from './components/purchase-pages/purchase-pages.component';
  import { UserDataComponent } from './components/purchase-pages/user-data/user-data.component';
  import { PaymentSettingsComponent } from './components/purchase-pages/payment-settings/payment-settings.component';
  import { BasketSummaryComponent } from './components/purchase-pages/basket-summary/basket-summary.component';
  import { ThankYouPageComponent } from './components/purchase-pages/thank-you-page/thank-you-page.component';
import { CurrentCategoriesComponent } from './components/a-shared-components/current-categories/current-categories.component';
import { FooterComponent } from './components/a-shared-components/footer/footer.component';
import { HeaderComponent } from './components/a-shared-components/header/header.component';
import { ProductRatingComponent } from './components/a-shared-components/product-rating/product-rating.component';
import { AddBasketPopupComponent } from './components/a-shared-components/add-basket-popup/add-basket-popup.component';

/* directives */
import { StarRatingDirective } from './directives/star-rating.directive';

/* pipes */
import { GetCartItemDataPipe } from './pipes/get-cart-item-data.pipe';
import { FormatPricePipe } from './pipes/format-price.pipe';


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
    SearchResultPageComponent,
    PurchasePagesComponent,
    UserDataComponent,
    PaymentSettingsComponent,
    BasketSummaryComponent,
    ThankYouPageComponent,
    CurrentCategoriesComponent,
    FooterComponent,
    HeaderComponent,
    ProductRatingComponent,
    AddBasketPopupComponent,
    GetCartItemDataPipe,
    StarRatingDirective,
    FormatPricePipe
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RoutingModule,
    FormsModule
  ],
  entryComponents: [AddBasketPopupComponent],
  providers: [
    CategoriesService, 
    ProductsService, 
    CurrentUserDataService, 
    PopupAddToCartService,
    ProductsOpinionsService,
    StarRatingService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

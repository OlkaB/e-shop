import { Component, OnInit, OnDestroy } from '@angular/core';
import { CurrentUserDataService } from '../../../services-and-models/current-user-data.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-basket-items',
  templateUrl: './basket-items.component.html',
  styleUrls: ['./basket-items.component.css']
})
export class BasketItemsComponent implements OnInit, OnDestroy {
  currentUserCart = [];
  cartDataSubscription: Subscription;

  constructor(private currentUserDataService: CurrentUserDataService) { }

  ngOnInit() {
    this.currentUserCart = this.currentUserDataService.getCartItems();
    this.cartDataSubscription = this.currentUserDataService.userCartChanged.subscribe((cartData: any) => {
      this.currentUserCart = cartData;
      console.log("Subsciption data: ", this.currentUserCart, " LENGTH: ", this.currentUserCart.length)
    });    
    let item = this.currentUserCart[0];
  }

  removeFromCart(productId) {
    this.currentUserDataService.removeFromCart(productId);
  }

  ngOnDestroy() {
    this.cartDataSubscription.unsubscribe();
    //console.log("cart item destroyed");
  }

  showOldPrice(item) {
    console.log("1. showOldPrice item: ", item);
    return item[Object.keys(item)[0]]['product'][0]['priceOld'] > item[Object.keys(item)[0]]['product'][0]['price'];
  }

}

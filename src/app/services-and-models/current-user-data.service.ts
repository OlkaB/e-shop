import { Injectable } from '@angular/core';
import { ProductsService } from './products.service';
import { Subject } from 'rxjs/Subject';


@Injectable()
export class CurrentUserDataService {
  userCartData = [];
  /* to observe changes in user cart data */
  userCartChanged = new Subject();

  constructor(private productsService: ProductsService) { }

  addToCart(productId, amount): void {
    this.userCartData.push({
      product: this.productsService.getProductByIdFromAllProds(productId),
      amount: amount
    });
    //console.log("ADD_Current cart data: ", this.userCartData);
    /* inform about changes in user cart data */
    this.userCartChanged.next(this.userCartData);
  }

  removeFromCart(indexToRemove): void {
    /* pass a place of item in cart arr, not a product id */
    this.userCartData.splice(indexToRemove, 1);
    //console.log("REMOVE_Current cart data: ", this.userCartData);
    /* inform about changes in user cart data */
    this.userCartChanged.next(this.userCartData);
  }

  getCartItems() {
    return this.userCartData.slice();
  }
}

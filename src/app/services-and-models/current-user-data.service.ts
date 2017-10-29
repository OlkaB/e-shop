import { Injectable } from '@angular/core';
import { ProductsService } from './products.service';

@Injectable()
export class CurrentUserDataService {
  userCartData = [];

  constructor(private productsService: ProductsService) { }

  addToCart(productId, amount): void {
    this.userCartData.push({
      product: this.productsService.getProductByIdFromAllProds(productId),
      amount: amount
    });
    console.log("ADD_Current cart data: ", this.userCartData);
  }

  removeFromCart(indexToRemove): void {
    /* pass a place of item in cart arr, not a product id */
    this.userCartData.splice(indexToRemove, 1);
    console.log("REMOVE_Current cart data: ", this.userCartData);
  }

  getCartItems() {
    return this.userCartData.slice();
  }
}

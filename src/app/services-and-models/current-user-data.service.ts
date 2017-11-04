import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { ProductsService } from './products.service';
import { PopupAddToCartService } from './popup-add-to-cart.service';


@Injectable()
export class CurrentUserDataService {
  userCartData = [];
  basketProductsIds = [];
  /* to observe changes in user cart data */
  userCartChanged = new Subject();

  constructor(private productsService: ProductsService,
              private popupAddToCartService: PopupAddToCartService) { }

  addToCart(productId, position, amount, categoryId, addedProduct): void {
    console.log("Step0: check passed args: ", productId, position, amount, categoryId, addedProduct);
    //console.log("Step0: check basketCurrentIds: ", this.basketProductsIds);
    //console.log("Step1: check basket length: ", this.userCartData.length);
    //console.log("Step2: check control arr: ", this.basketProductsIds);

    /* add product or increase amount if product is in cart */
    if(this.userCartData.length > 0 && this.basketProductsIds.indexOf(productId) !== -1) {
      for(let i = 0; i < this.userCartData.length; i++) {
        //console.log("Step3: entered For loop");
        //console.log("Step4: check condition: ", this.userCartData[i], Object.keys(this.userCartData[i])[0], Object.keys(this.userCartData[i])[0] === productId);
        if(Object.keys(this.userCartData[i])[0] === productId) {
          //console.log("Step5: found key");
          //console.log("Step 5a: Identify amount selector - via amount: ", this.userCartData[i][productId].amount)
          this.userCartData[i][productId].amount += amount;
          break;
        }
      }
    } else {
      //console.log("Step6: key not found; push new item");
      this.userCartData.push({
        [productId]: {
          categoryId: categoryId,
          amount: amount,
          product: this.productsService.getProductByIdFromAllProds(productId)  
        }
      }); 
      this.basketProductsIds.push(productId); 
    }
    console.log("Step7: check cart data: ", this.userCartData);
    /* inform about changes in user cart data */
    this.userCartChanged.next(this.userCartData);
    /* show pop up */
    this.popupAddToCartService.popUpDisplayVal.next('block');
    this.popupAddToCartService.currentProductAdded.next(addedProduct);
  }

  removeFromCart(indexToRemove): void {
    /* pass a place of item in cart arr, not a product id */
    this.userCartData.splice(indexToRemove, 1);
    this.basketProductsIds.splice(indexToRemove,1);
    //console.log("REMOVE_Current cart data: ", this.userCartData, "\n basketProductsIds: ", this.basketProductsIds);
    /* inform about changes in user cart data */
    this.userCartChanged.next(this.userCartData);
  }

  getCartItems() {
    return this.userCartData.slice();
  }
}

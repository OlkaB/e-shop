import { Component, OnInit, OnDestroy } from '@angular/core';
import { PopupAddToCartService } from '../../../services-and-models/popup-add-to-cart.service';
import { Subscription } from 'rxjs/Subscription';


@Component({
  selector: 'app-add-basket-popup',
  templateUrl: './add-basket-popup.component.html',
  styleUrls: ['./add-basket-popup.component.css']
})
export class AddBasketPopupComponent implements OnInit, OnDestroy {
  popUpDisplaySubscription: Subscription;
  popUpDataSubscription: Subscription;
  popUpDisplayVal = 'none';
  productToDisplay;

  constructor(private popupAddToCartService: PopupAddToCartService) { }

  ngOnInit() {
    this.popUpDisplaySubscription = this.popupAddToCartService.popUpDisplayVal.subscribe((styleVal: string) => {
      this.popUpDisplayVal = styleVal;
    });
    this.popUpDataSubscription = this.popupAddToCartService.currentProductAdded.subscribe((productData: any) => {
      //console.log("POP UP productData passed: ", productData, typeof productData);
      this.productToDisplay = productData;
      //console.log("POP UP this.productToDisplay", this.productToDisplay);
    });    
  }

  closePopUp() {
    this.popupAddToCartService.popUpDisplayVal.next('none')
  }

  ngOnDestroy() {
    this.popUpDisplaySubscription.unsubscribe();
    this.popUpDataSubscription.unsubscribe();
  }

}

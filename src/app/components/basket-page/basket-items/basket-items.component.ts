import { Component, OnInit } from '@angular/core';
import { CurrentUserDataService } from '../../../services-and-models/current-user-data.service';

@Component({
  selector: 'app-basket-items',
  templateUrl: './basket-items.component.html',
  styleUrls: ['./basket-items.component.css']
})
export class BasketItemsComponent implements OnInit {
  currentUserCart = [];
    arr = [1,2,3,4];

  constructor(private currentUserDataService: CurrentUserDataService) { }

  ngOnInit() {
    this.currentUserCart = this.currentUserDataService.getCartItems();
    console.log(this.currentUserCart[0].product[0].name);
  }

  removeFromCart(productId) {
    this.currentUserDataService.removeFromCart(productId);
  }

}

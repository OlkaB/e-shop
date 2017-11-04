import { Component, OnInit } from '@angular/core';
import { NgComponentOutlet } from '@angular/common';
import { ActivatedRoute, Params } from '@angular/router';
import { CategoriesService } from '../../../services-and-models/categories.service';
import { ProductsService } from '../../../services-and-models/products.service';
import { CurrentUserDataService } from '../../../services-and-models/current-user-data.service';
import { PopupAddToCartService } from '../../../services-and-models/popup-add-to-cart.service';
import { AddBasketPopupComponent } from '../../a-shared-components/add-basket-popup/add-basket-popup.component';

@Component({
  selector: 'app-category-items',
  templateUrl: './category-items.component.html',
  styleUrls: ['./category-items.component.css']
})
export class CategoryItemsComponent implements OnInit {
  currentCategory: {id: number, name: string};
  currentCategoryProducts;

  constructor(private activatedRoute: ActivatedRoute, 
              private categoriesService: CategoriesService,
              private productsService: ProductsService,
              private currentUserDataService: CurrentUserDataService,
              private popupAddToCartService: PopupAddToCartService) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe((params: Params) => {
        let catId = +params['catId'];
        this.currentCategory = {
          id: catId,
          name: this.categoriesService.getMainCategoryName(+catId)
        };
        this.currentCategoryProducts = this.productsService.getCategoryProducts(this.currentCategory.name)
    });
    //console.log("this.currentCategoryProducts: ", this.currentCategoryProducts);
  }

  addToCart(productId, productPositionOnPage, amount, categoryId, currentProductAllData) {
    this.currentUserDataService.addToCart(productId, productPositionOnPage, +amount, categoryId, currentProductAllData);    
  }

}
 


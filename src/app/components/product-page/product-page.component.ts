import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { ProductsService } from '../../services-and-models/products.service';
import { CurrentUserDataService } from '../../services-and-models/current-user-data.service';


@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.css']
})
export class ProductPageComponent implements OnInit {
  productActive;
  currentCategoryId: number;
  stars = [1,2,3,4,5];

  constructor(private activatedRoute: ActivatedRoute, 
              private productsService: ProductsService,
              private currentUserDataService: CurrentUserDataService) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe((params: Params) => {
        let catId = +params['catId'];
        let prodId = params['prodId'];
        //console.log("Activated route_CATiD: ", catId, " PRODiD: ", prodId);
        this.productActive = this.productsService.getProductByIdFromCat(catId, prodId);
        //console.log("Active product: ", this.productActive);
        //console.log("Active product img: ", this.productActive[0].images[0]);
    });
    this.activatedRoute.params.subscribe((params: Params) => {
        let catId = +params['catId'];
        this.currentCategoryId = catId;
    });
  }

  addToCart(productId, position, amount, categoryId, addedProduct) {
     categoryId = this.currentCategoryId;
     this.currentUserDataService.addToCart(productId, position, amount, categoryId, addedProduct);
  }

}

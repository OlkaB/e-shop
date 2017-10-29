import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { ProductsService } from '../../services-and-models/products.service';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.css']
})
export class ProductPageComponent implements OnInit {
  productActive;

  constructor(private activatedRoute: ActivatedRoute, private productsService: ProductsService) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe((params: Params) => {
        let catId = +params['catId'];
        let prodId = params['prodId'];
        //console.log("Activated route_CATiD: ", catId, " PRODiD: ", prodId);
        this.productActive = this.productsService.getProductByIdFromCat(catId, prodId);
        //console.log("Active product: ", this.productActive);
        //console.log("Active product img: ", this.productActive[0].images[0]);
    });
  }

}

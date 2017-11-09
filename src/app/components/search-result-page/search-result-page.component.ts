import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { ProductsService } from '../../services-and-models/products.service';
 
@Component({
  selector: 'app-search-result-page',
  templateUrl: './search-result-page.component.html',
  styleUrls: ['./search-result-page.component.css']
})
export class SearchResultPageComponent implements OnInit {
  foundProducts;

  constructor(private activatedRoute: ActivatedRoute,
              private productsService: ProductsService) { }

  ngOnInit() {
    this.activatedRoute.queryParams.subscribe((params: Params) => {
      let query = params['query'];
      this.foundProducts = this.productsService.getProductBySearchQuery(query);
      console.log("PRODUCTS TO SHOW: ", this.foundProducts, "\nPROD1: ", this.foundProducts[0][0]['name'], "PROD2: ", this.foundProducts[1][0]['name']);
    });
  }

}

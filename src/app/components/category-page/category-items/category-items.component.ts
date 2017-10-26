import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { CategoriesService } from '../../../services-and-models/categories.service';
import { ProductsService } from '../../../services-and-models/products.service';

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
              private productsService: ProductsService) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe((params: Params) => {
        let catId = +params['id'];
        this.currentCategory = {
          id: catId,
          name: this.categoriesService.getMainCategoryName(+catId)
        };
        this.currentCategoryProducts = this.productsService.getCategoryProducts(this.currentCategory.name)
    });
    
  }

}
 
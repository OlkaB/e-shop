import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { CategoriesService } from '../../../services-and-models/categories.service';

@Component({
  selector: 'app-category-items',
  templateUrl: './category-items.component.html',
  styleUrls: ['./category-items.component.css']
})
export class CategoryItemsComponent implements OnInit {
  currentCategory: {id: number, name: string};

  constructor(private activatedRoute: ActivatedRoute, private categoriesService: CategoriesService) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe((params: Params) => {
        let catId = +params['id'];
        this.currentCategory = {
          id: catId,
          name: this.categoriesService.getMainCategoryName(+catId)
        };
    })
  }

}
 
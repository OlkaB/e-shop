import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { CategoriesService } from '../../../services-and-models/categories.service'

@Component({
  selector: 'app-current-categories',
  templateUrl: './current-categories.component.html',
  styleUrls: ['./current-categories.component.css']
})
export class CurrentCategoriesComponent implements OnInit {
  categories;
  currentCategoryId;

  constructor(private categoriesService: CategoriesService,
              private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    /* get all categories to list them in side-pane */
    this.categories = this.categoriesService.mainCategories;
    /* subscribe to route to change current category highlight */
    this.activatedRoute.params.subscribe((params: Params) => {
      this.currentCategoryId = +params['catId'];
    });
  }

}

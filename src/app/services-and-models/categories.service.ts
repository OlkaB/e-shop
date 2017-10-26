import { Injectable } from '@angular/core';

@Injectable()
export class CategoriesService {
  /* main products categories */
  mainCategories = [{name: 'cars', id: 1}, {name: 'parts', id: 2}, {name: 'services', id: 3}, {name: 'engines', id: 4}, {name: 'gadgets', id: 5}];

  constructor() { }

  getMainCategoryName(catId: number): string {
      for(let cat of this.mainCategories) {
          if(cat.id === catId) {
            return cat.name;
          }
      }
  }

}

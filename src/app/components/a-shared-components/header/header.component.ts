import { Component, OnInit } from '@angular/core';
import { CategoriesService } from '../../../services-and-models/categories.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  mainCategories = this.categoriesService.mainCategories;
  navBarReveal = false;
  
  constructor(private categoriesService: CategoriesService) { }

  ngOnInit() {
  }

  revealMenuMobille() {
    return this.navBarReveal = !this.navBarReveal;
  }

}

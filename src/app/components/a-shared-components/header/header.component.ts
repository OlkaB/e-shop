import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CategoriesService } from '../../../services-and-models/categories.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  mainCategories = this.categoriesService.mainCategories;
  navBarReveal = false;
  
  constructor(private categoriesService: CategoriesService,
              private router: Router) { }

  ngOnInit() {
  }

  revealMenuMobille() {
    return this.navBarReveal = !this.navBarReveal;
  }

  submitSearchQuery(formData) {
    this.router.navigate(['/search'], {queryParams: {query: formData.value.searchQuery}})
  }
}

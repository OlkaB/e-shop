import { Component, OnInit, Input } from '@angular/core';
import { ProductsOpinionsService } from '../../../services-and-models/products-opinions.service';

@Component({
  selector: 'app-product-data',
  templateUrl: './product-data.component.html',
  styleUrls: ['./product-data.component.css']
})
export class ProductDataComponent implements OnInit {
  @Input() productActive;
  activeTab = "Description";
  productOpinions;
  starRating = {
    star1: 'glyphicon-star-empty',
    star2: 'glyphicon-star-empty',
    star3: 'glyphicon-star-empty',
    star4: 'glyphicon-star-empty',
    star5: 'glyphicon-star-empty',
  }
  starRatingBeforeHover = {
    star1: 'glyphicon-star-empty',
    star2: 'glyphicon-star-empty',
    star3: 'glyphicon-star-empty',
    star4: 'glyphicon-star-empty',
    star5: 'glyphicon-star-empty',
  }

  constructor(private productsOpinionsService: ProductsOpinionsService) { }

  ngOnInit() {
    this.productOpinions = this.productsOpinionsService.getParticularProductOpinions(this.productActive[0].id)[0].opinion; 
    //console.warn(this.productOpinions, typeof this.productOpinions, this.productOpinions.length);
  }

  activateTab(activateTab) {
    this.activeTab = activateTab;
  }

  hoverOnStar(starNo) {
    let i = 1;
    for(let key in this.starRating) { 
      this.starRatingBeforeHover[key] = this.starRating[key];     
      i <= starNo ? this.starRating[key] = 'glyphicon-star' : this.starRating[key] = 'glyphicon-star-empty';        
      i++;    
    }
  }

  hoverOffStar(starNo) {
    for(let key in this.starRating) {      
      this.starRating[key] = this.starRatingBeforeHover[key];
    }
  }

  starRate(starNo) {
    let i = 1;
    for(let key in this.starRating) {
      i <= starNo ? this.starRating[key] = 'glyphicon-star' : this.starRating[key] = 'glyphicon-star-empty'; 
      this.starRatingBeforeHover[key] = this.starRating[key];   
      i++;    
    }
  }

}

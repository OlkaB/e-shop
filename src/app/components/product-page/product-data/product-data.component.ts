import { Component, OnInit, Input } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductsOpinionsService } from '../../../services-and-models/products-opinions.service';
import { OpinionModel } from '../../../services-and-models/products-opinions.model';

@Component({
  selector: 'app-product-data',
  templateUrl: './product-data.component.html',
  styleUrls: ['./product-data.component.css']
})
export class ProductDataComponent implements OnInit {
  @Input() productActive;
  activeTab = "Description";
  productOpinions;
  stars = [1,2,3,4,5];
  starRating = {
    0: 'glyphicon-star-empty',
    1: 'glyphicon-star-empty',
    2: 'glyphicon-star-empty',
    3: 'glyphicon-star-empty',
    4: 'glyphicon-star-empty',
  }
  starRatingBeforeHover = {
    0: 'glyphicon-star-empty',
    1: 'glyphicon-star-empty',
    2: 'glyphicon-star-empty',
    3: 'glyphicon-star-empty',
    4: 'glyphicon-star-empty',
  }
  userOpinionRating;
  addOpinionMode = false;

  constructor(private activatedRoute: ActivatedRoute,
              private router: Router,
              private productsOpinionsService: ProductsOpinionsService) { }

  ngOnInit() {
    if(this.productsOpinionsService.getParticularProductOpinions(this.productActive[0].id).length > 0){
      this.productOpinions = this.productsOpinionsService.getParticularProductOpinions(this.productActive[0].id)[0].opinion; 
    }    
    //console.warn(this.productOpinions, typeof this.productOpinions, this.productOpinions.length);
    this.activatedRoute.fragment.subscribe((value: string) => {
      console.log("ROUTE FRAGMENT: ", value);
      value === 'addOpinion' ? this.addOpinionMode = true : this.addOpinionMode = false;
      console.log("addOpinionMode: ", this.addOpinionMode);
      value === 'addOpinion' ? this.activeTab = "Opinions" : '';
    });
  }

  activateTab(activateTab): void {
    this.activeTab = activateTab;
  }

  hoverOnStar(starNo): void {
    let i = 0;
    for(let key in this.starRating) { 
      this.starRatingBeforeHover[key] = this.starRating[key];     
      i <= starNo ? this.starRating[key] = 'glyphicon-star' : this.starRating[key] = 'glyphicon-star-empty';        
      i++;    
    }
  }

  hoverOffStar(starNo): void {
    for(let key in this.starRating) {      
      this.starRating[key] = this.starRatingBeforeHover[key];
    }
  }

  starRate(starNo): void {
    let i = 0;
    for(let key in this.starRating) {
      i <= starNo ? this.starRating[key] = 'glyphicon-star' : this.starRating[key] = 'glyphicon-star-empty'; 
      this.starRatingBeforeHover[key] = this.starRating[key];   
      i++;    
    }
    this.userOpinionRating = starNo+1;
    console.log("current star rating: ", this.userOpinionRating);
  }

  submitOpinion(formData: NgForm) {
    console.log(formData);
    let date = new Date();
    let month = date.getMonth().toString().length === 1 ? "0" + date.getMonth() : date.getMonth();
    let day = date.getDay().toString().length === 1 ? "0" + date.getDay() : date.getDay();
    let today = date.getFullYear() + '-' + month + '-' + day;
    let opinionId = this.productActive[0]['id'] + '_' + (this.productActive[0]['opinions'].length + 1);
    let opinion = new OpinionModel(formData.value.userName, opinionId, this.userOpinionRating, formData.value.opinionTitle, formData.value.opinionText, today);
    //console.log("new opinion: ", opinion);
    this.productsOpinionsService.addOpinionToProduct(this.productActive[0]['id'], opinion);
    alert("Thank you - your opinion has been sent.");
    /*remove 'opinionAddingMode' route fragment */
    this.router.navigate([]);
  }

}

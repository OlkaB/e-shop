import { Injectable } from '@angular/core';
import { ProductsOpinionsModel, OpinionModel } from './products-opinions.model';

@Injectable()
export class ProductsOpinionsService {
  productsOpinions = [
  new ProductsOpinionsModel('1_0001', [
    new OpinionModel('Gabi', "1_0001_1", 5, "They're the best", "The best car for the ladies", "2017-10-01"),
    new OpinionModel('Waldi', "1_0001_2", 4, "Fantastic", "Fantastic car for old timers lovers", "2017-09-04"),
    ]),
  new ProductsOpinionsModel('3_001', [
    new OpinionModel('Andy', "3_001_1", 3, "Good but a bit long", "They made it great, check everything in details, but it took so long, when i was in hurry", "2017-11-15"),
    new OpinionModel('Fiona', "3_001_2", 5, "Fantastic service", "The best tires service I've ever been in", "2017-02-13")
    ]),
  new ProductsOpinionsModel('3_002', [
    new OpinionModel('Ted', "3_002_1", 4, "Good one", "I recommend it", "2017-11-01"),
    new OpinionModel('Tony', "3_002_2", 5, "Good", "Good one. You should try", "2017-03-21")
    ])
  ];

  constructor() { }

  getAllOpinions() {
    return this.productsOpinions.slice();
  }

  getParticularProductOpinions(productId) {
    let particularProductOpinions = [];
    for(let i = 0; i < this.productsOpinions.length; i++) {
      if(this.productsOpinions[i]['productId'] === productId) {
        particularProductOpinions.push(this.productsOpinions[i]);
      }
    }
    //console.log("THIS product OPINIONS: ", particularProductOpinions)
    return particularProductOpinions;
  }
}

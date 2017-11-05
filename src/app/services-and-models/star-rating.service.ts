import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class StarRatingService {
  starRating = new Subject();

  constructor() { }

  hoverStar(event, starNo){
    console.warn("HOVER STAR EVENT: ", event, "\nSTAR REFERECE: ", starNo);
  }

}

import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class StarRatingService {
  starRating = new Subject();

  constructor() { }

}

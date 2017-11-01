import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class PopupAddToCartService {
  popUpDisplayVal = new Subject();
  currentProductAdded = new Subject();

  constructor() { }

}

import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'showOldPriceCondition'
})
export class ShowOldPriceConditionPipe implements PipeTransform {

  transform(value: any, price: any, priceOld: any): any {
  
    
  }

}

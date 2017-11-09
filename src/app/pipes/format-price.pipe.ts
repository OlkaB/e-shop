import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formatPrice'
})
export class FormatPricePipe implements PipeTransform {

  transform(value: any, currency?: any): any {   
    let outcome;

    if(!currency) {
      currency = "zł";
    }
    outcome = value.toString().replace('.',',').replace(/\B(?=(\d{3})+(?!\d))/g, " ");

    return outcome;
  }

}

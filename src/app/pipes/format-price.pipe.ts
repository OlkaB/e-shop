import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formatPrice'
})
export class FormatPricePipe implements PipeTransform {

  transform(value: any, currency?: any): string {   
    let outcome;

    if(!currency) {
      currency = "zł";
    }

    return value.toFixed(2).toString().replace('.',',').replace(/\B(?=(\d{3})+(?!\d))/g, " ");
  }

}

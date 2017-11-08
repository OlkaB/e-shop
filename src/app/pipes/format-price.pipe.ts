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
    outcome = value.toString().replace(/./g, function(c, i, a) {
      return i && c !== "." && ((a.length - i) % 3 === 0) ? ' ' + c : c;
    }) + " " + currency;

    return outcome;
  }

}

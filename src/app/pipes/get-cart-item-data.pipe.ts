import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'getCartItemData'
})
export class GetCartItemDataPipe implements PipeTransform {

  transform(value: any, mainProperty: string, subProperty: string, subPropArrayPos: number): any {
    //console.log("PIPE args: value: ", value, "\nmainProperty: ", mainProperty, "\nsubProperty: ", subProperty, "\nsubPropArrayPos: ", subPropArrayPos);
    let objectDeeper = value[Object.keys(value)[0]][mainProperty];

    if(subProperty !== undefined) {
      if(subPropArrayPos !== undefined) {
        //console.log("PIPE VAL1_ sub+arr: ", objectDeeper[0][subProperty][subPropArrayPos]);
        return objectDeeper[0][subProperty][subPropArrayPos];
      } else {
        //console.log("PIPE VAL2_ sub: ", objectDeeper[0][subProperty]);
        return objectDeeper[0][subProperty];
      }
    } else {
      //console.log("PIPE VAL3_ main: ", objectDeeper);
      return objectDeeper
    }
  }

}

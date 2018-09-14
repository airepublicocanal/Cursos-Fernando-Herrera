import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'capitalize'
})
export class CapitalizePipe implements PipeTransform {
  transform(value: string, allCapitalized:boolean = true): string {
    let returnValue:string = value.toLowerCase();

    let names:string[] = returnValue.split(" ");

    if (allCapitalized) {
      for(let i in names) {
        names[i] = names[i][0].toUpperCase() + names[i].substr(1);
      }
    } else {
      names[0] = names[0][0].toUpperCase() + names[0].substr(1);
    }
    returnValue = names.join(" ");

    return returnValue;
  }
}

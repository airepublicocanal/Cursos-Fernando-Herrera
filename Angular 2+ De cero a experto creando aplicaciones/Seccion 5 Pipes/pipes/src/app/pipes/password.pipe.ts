import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'password'
})
export class PasswordPipe implements PipeTransform {

  transform(value:string, activatePassword:boolean = true):string {
    let returnValue:string = "";

    if (activatePassword) {
      for(let i:number = 0; i <= (value.length - 1); i++) {
        returnValue += "*";
      }
    } else {
      returnValue = value;
    }

    return returnValue;
  }

}

import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reverse'
})
export class ReversePipe implements PipeTransform {
  outputValue:string = "";
  transform(value: any, ...args: any[]) {
      this.outputValue = value.split('').reverse().join('');
      return this.outputValue;
  }

}

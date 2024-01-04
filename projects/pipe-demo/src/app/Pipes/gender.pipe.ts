import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'gender'
})
export class GenderPipe implements PipeTransform {
  transform(value: string, arg:string): string {
    if(arg == "Male"){
      return "Mr. "+value;
    }
    else if(arg == "Female"){
      return "Mrs. "+value;
    }
    return value;
  }

  }



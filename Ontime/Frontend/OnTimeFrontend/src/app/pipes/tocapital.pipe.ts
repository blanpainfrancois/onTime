import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'tocapital'
})
export class TocapitalPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if(value){
      return value.charAt(0).toUpperCase() + value.slice(1);
    }
   
  }

}

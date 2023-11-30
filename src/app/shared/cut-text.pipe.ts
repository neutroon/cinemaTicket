import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cutText'
})
export class CutTextPipe implements PipeTransform {

  transform(value: any, ...args: unknown[]): unknown {
    value = value.slice(0,3);
    const lastIndex =  value[value.length-1].concat('...')
    value[value.length-1] = lastIndex
    return value
  }

}

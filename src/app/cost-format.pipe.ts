import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'costFormat'
})
export class CostFormatPipe implements PipeTransform {
  transform(cost: number) {
    return cost.toString().replace(/(\d)(?=(\d{3})+$)/g, '$1 ');
  }
}
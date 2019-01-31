import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'fliter'
})
export class FliterPipe implements PipeTransform {

  transform(list: any[], fliter?: string, keyword?: string): any {
    if (!fliter || !keyword) {
      return list;
    }

    return list.filter(iterm => {
      const value = iterm[fliter];
      return value.indexOf(keyword) >= 0;
    });
  }

}

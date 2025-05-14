import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchFilter',
  standalone: true
})
export class SearchFilterPipe implements PipeTransform {
  transform(list: any[], filterText: string): any {
    console.log('cdcd')
    return list ? list.filter(item =>
    item.marque.toLowerCase().includes(filterText)) : [];
    }

}

//Author : Sandeep Chauhan
//Date : 08-11-2023
//Filter Table Data

import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchFilter'
})
export class SearchFilterPipe implements PipeTransform {
  transform(items: any[], searchText: string): any[] {
    if (!items) {
      return [];
    }
    if (!searchText) {
      return items;
    }

    searchText = searchText.toLowerCase();

    return items.filter(item => {
      for (const property in item) {
        if (item.hasOwnProperty(property) && typeof item[property] === 'string') {
          if (item[property].toLowerCase().includes(searchText)) {
            return true; // If any property matches the search text, include the item
          }
        }
      }
      return false; // If no property matches the search text, exclude the item
    });
  }
}

import { Pipe, PipeTransform } from '@angular/core';
import * as loadash from 'lodash';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(items: any, searchTerm: any) {
    if (searchTerm) {
      let newSearchTerm = !isNaN(searchTerm) ? searchTerm.toString() : searchTerm.toString().toUpperCase();
      return items.filter((item: any) => {
        return this.lookForNestedObject(item, newSearchTerm);
      })
    }
    else { return items; }
  }

  lookForNestedObject(item: any, newSearchTerm: any) {
    let origItem = { ...item };
    let that = this;
    //console.log("New Row");
    parseNestedObject("",item);
    function parseNestedObject(tempKey: any,item: any) {
      for (let key in item) {
        if (loadash.isPlainObject(item[key])) {
          if (origItem[key]) { delete origItem[key] }
          //console.log(key);
          parseNestedObject(key,item[key]);
        }
        else {
          if (origItem[tempKey+key]) { delete origItem[tempKey+key] }
          //console.log("Nested Item");
          origItem[tempKey+key] = item[key];
          //console.log(tempKey+key);
        }
      }
    }
    return that.search(item, origItem, newSearchTerm);
  }
  search(item: any, origItem: any, newSearchTerm: any):any {
    let filteredList = [];
    let prop = "";
    for (let koy in origItem) {
      if(origItem[koy]){
        prop = isNaN(origItem[koy]) ? origItem[koy].toString().toUpperCase() : origItem[koy].toString();
        if (prop.indexOf(newSearchTerm) > -1) {
          filteredList.push(item);
          return filteredList;
        }
      }
    }
  }
}

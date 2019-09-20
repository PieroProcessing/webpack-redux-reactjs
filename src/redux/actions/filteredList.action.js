import {FILTERED}from '../constants/filteredList';
function filterList(param, filter, list) {
    return{
       type:  FILTERED.LIST,
       param: param,
       filter: filter,
       list: list,
    }
}
export {filterList}
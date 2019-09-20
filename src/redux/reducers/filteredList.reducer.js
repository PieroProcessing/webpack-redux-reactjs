import { defaultState } from '../defaultState';
import { FILTERED } from '../constants/filteredList';
import {escapeRegExp} from '../../service/utils';

const initialState = defaultState().filtered;



export function filteredListReducer(state = initialState, action) {
    const {type,list,filter,param} = action;

    switch (type) {
        case FILTERED.LIST:
         var newState =  (filter)? list.filter(       
            (item)=> {return !item[param].toLowerCase().search(escapeRegExp(filter).toLowerCase())}
        ): list;
        console.log('newState', action)
        return newState;
        default:
            return state;
    }
}
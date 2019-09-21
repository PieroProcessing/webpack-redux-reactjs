import { SEARCH } from '../constants/search';

function resetSearch() {
    return{
        type: SEARCH.RESET_SEARCH,
    };
}
function updateSearch(term) {
    return{
        type: SEARCH.UDPDATE_SEARCH,
        payload: term
    };
}

export {
    resetSearch,
    updateSearch
};
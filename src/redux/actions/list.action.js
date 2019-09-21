import { LIST } from '../constants/list';
function addItemList(item) {
    return {
        type: LIST.ADD_ITEM_LIST,
        payload: item,
    };
}
function deleteItemList(item) {
    return {
        type: LIST.DELETE_ITEM_LIST,
        payload: item,
    };
}
function editItemList(item) {
    return {
        type: LIST.EDIT_ITEM_LIST,
        payload: item,
    };
}
function initList(list) {
    return {
        type: LIST.INIT_LIST,
        payload:list,
    };
}
function resetList() {
    return {
        type: LIST.RESET_LIST,
    };
}
function updateList(list) {
    return {
        type: LIST.UPDATE_LIST,
        payload: list,
    };
}

export { addItemList, deleteItemList, editItemList, initList, resetList, updateList };

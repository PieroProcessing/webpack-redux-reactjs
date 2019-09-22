import { TODOS } from '../constants/todos';
function addItemTodos(item) {
    return {
        type: TODOS.ADD_ITEM_TODOS,
        payload: item,
    };
}
function deleteItemTodos(item) {
    return {
        type: TODOS.DELETE_ITEM_TODOS,
        payload: item,
    };
}
function editItemTodos(item) {
    return {
        type: TODOS.EDIT_ITEM_TODOS,
        payload: item,
    };
}
function initTodos(Todos) {
    return {
        type: TODOS.INIT_TODOS,
        payload:Todos,
    };
}
function resetTodos() {
    return {
        type: TODOS.RESET_TODOS,
    };
}
function updateTodos(Todos) {
    return {
        type: TODOS.UPDATE_TODOS,
        payload: Todos,
    };
}

export { addItemTodos, deleteItemTodos, editItemTodos, initTodos, resetTodos, updateTodos };

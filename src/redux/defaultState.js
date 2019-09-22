const defaultState = () => {
    var defaultState = {
        auth: {
            isLogged: false,
        },
        search: '',
        list: [],
        todos:[],
        record: {},
    }
    return defaultState;
}

export { defaultState };
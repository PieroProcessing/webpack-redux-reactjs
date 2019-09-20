const defaultState = () => {
    var defaultState = {
        auth: {
            isLogged: false,
        },
        search: '',
        list: {},
        filtered:[],
        record: {},
    }
    return defaultState;
}

export { defaultState };
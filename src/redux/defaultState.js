const defaultState = () => {
    var defaultState = {
        auth: {
            isLogged: false,
        },
        search: '',
        list: {},
        record: {},
    }
    return defaultState;
}

export { defaultState };
const initialState = {
    hits: [],
    loading: true,
    error: false,
};

const reducer = (state, action) => {
    switch (action.type) {
        case "SET_LOADING":
            return { ...state, loading: action.payload };
        case "GET_CAPSULES":
            return { ...state, hits: action.payload };
        case "SET_ERROR":
            return { ...state, error: action.payload };
        default:
            return state;
    }
};

export { reducer, initialState }
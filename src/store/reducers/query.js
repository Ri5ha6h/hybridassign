import { QUERY } from "../actions/query";

const initialState = {
    arr: [],
    query: null,
};

const queryReducer = (state = initialState, action) => {
    switch (action.type) {
        case QUERY:
            const query = action.query;
            const newArr = [...state.arr];
            const find = state.arr.find((item) => item === query);
            if(find === query){
                return {
                    ...state,
                    query: query,
                }
            }else{
                newArr.push(query);
                return {
                    ...state,
                    arr: newArr,
                    query: query,
                };
            }
        default:
            return state;
    }
};

export default queryReducer;

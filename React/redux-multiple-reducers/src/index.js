import {combineReducers, createStore} from 'redux';
//in een echt project komen elke reducer in een aparte file.
//state = {} -> default value niet meer op de store maar op de parameter
const userReducer = (state = {}, action) => {
    switch (action.type) {
        case "CHANGE_NAME": {
            state = {...state, name: action.payload};
            break;
        }
        case "CHANGE_AGE": {
            state = {...state, age: action.payload};
            break;
        }
    }
    return state;
};
const tweetsReducer = (state = [], action) => {
    return state;
};

const reducers = combineReducers({
    //welk stuk data willen we bewerken? : en welke reducerfunction gaat dit afhandelen?
    user: userReducer,
    tweets: tweetsReducer
});
const store = createStore(reducers);
store.subscribe(
    () => {
        console.log("store changed", store.getState());
    }
);
store.dispatch({type: 'CHANGE_NAME', payload: "Fred"});
store.dispatch({type: 'CHANGE_AGE', payload: 35});
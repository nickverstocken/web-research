import { createStore } from 'redux';

const reducer = (state, action) => {
    if(action.type === 'PLUS'){
        return state + action.payload;
    }
    return state;
}

const store = createStore(reducer, 0);

store.subscribe(
    () => {
      console.log('store changed', store.getState());
    }
);

store.dispatch({type: 'PLUS', payload: 1});
store.dispatch({type: 'PLUS', payload: 10});
store.dispatch({type: 'PLUS', payload: 5});
store.dispatch({type: 'PLUS', payload: 3});
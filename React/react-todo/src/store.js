import {applyMiddleware, createStore} from 'redux';
import {createLogger} from 'redux-logger';
import todoReducer from './reducers';
import {loadState, saveState} from './connectivity/LocalStorage';
const middleware = applyMiddleware(createLogger());
const peristedState = loadState();
const store = createStore(
    todoReducer, peristedState, middleware
);
store.subscribe(
    () => {
saveState({todos: store.getState().todos});
});


store.dispatch(addTodo('Buy Milk'));



export default store;
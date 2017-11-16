import { v4 } from 'node-uuid';
export const VisibilityFilters = {
    SHOW_ALL: 'SHOW_ALL',
    SHOW_COMPLETED: 'SHOW_COMPLETED',
    SHOW_ACTIVE: 'SHOW_ACTIVE'
}
export const addTodo = text => {
    return {
        type: 'ADD_TODO',
        id: v4(),
        text
    }
}

export const toggleTodo = id => {
    return {
        type: 'TOGGLE_TODO',
        id
    }
}
export const deleteTodo = id => {
    return {
        type: 'DELETE_TODO',
        id
    }
}
export const clearCompleted = () => {
    return {
        type: 'CLEAR_COMPLETED'
    }
}
export const setVisibilityFilter = filter => {
    return {
        type: 'SET_VISIBILITY_FILTER',
        filter
    }
}
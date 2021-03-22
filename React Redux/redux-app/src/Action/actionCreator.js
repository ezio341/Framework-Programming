import {ADD_TODO, REMOVE_TODO, TOGGLE_TODO, SET_VISIBILITY_FILTER} from './actionTypes'

let ToDoID = 2

export const addToDo = text => ({
    type: ADD_TODO,
    id : ToDoID++,
    text
})
export const deleteToDo = (id) =>({
    type: REMOVE_TODO,
    id: id
})
export const toggleToDo = (id) => ({
    type: TOGGLE_TODO,
    id: id
})
export const setVisibilityFilter = filter =>({
    type: SET_VISIBILITY_FILTER,
    filter
}) 
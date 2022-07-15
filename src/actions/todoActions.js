import { createAction } from "redux-actions";

export const createTodo = createAction("CREATE_TODOS")
export const deleteTodo = createAction("DELETE_TODOS")
export const changeText = createAction("CHANGE_TEXT")
import { handleActions } from 'redux-actions'
import { TodoState } from '../../constants/models'

const todoReducers = handleActions({
    CREATE_TODOS: (state) => {
        let todos = state.get('todos').push(state.get('todo'))
        return state.set('todos',todos)
    },
    DELETE_TODOS: (state, {payload}) => {
       return state.set('todos',state.get('todos').splice(payload.index,1))
    },
    CHANGE_TEXT: (state, { payload}) => {
        return state.merge({'todo': payload})
    }
}, TodoState)

export default todoReducers

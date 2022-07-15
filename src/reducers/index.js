import  { combineReducers} from 'redux-immutable'

import todo from './data/todoReducers'

const rootReducer = combineReducers({
    todo
})

export default rootReducer
import { connect } from 'react-redux'
import { deleteTodo } from '../../actions'
import TodoList from './TodoList'

const mapStateToProps = (state) => ({
    todos: state.getIn(['todo', 'todos'])
})

const mapDispatchToProps = (dispatch) => ({
    onDeleteTodo: (index)  => {
        dispatch(deleteTodo({index}))
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(TodoList)
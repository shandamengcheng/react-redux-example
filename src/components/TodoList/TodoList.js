import React from 'react'
import PropTypes from 'prop-types'


const TodoList = ({
    todos,
    onDeleteTodo
}) => {

    return (
        <div>
            <h2>List</h2>
           <ul>{
              todos &&  todos.map((todo, index)=> (
                   <li key={index}>{todo.get('text')}
                   <button onClick={() => onDeleteTodo(index)}>X</button>
                   </li>
               )).toJS()
               }</ul> 
        </div>
    )
}


TodoList.propTypes = {
    todos: PropTypes.any,
    onDeleteTodo: PropTypes.func
}

export default TodoList


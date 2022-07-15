import React from 'react'
import PropTypes from 'prop-types';

const TodoHeader = ({
    onChangeText,
    onCreateTodo,
    todo
}) => {
    return (
        <div>
            <h1>TodoHeader</h1>
            <input type='text' value={todo.get('text')} onChange={onChangeText} />
            <button onClick={onCreateTodo}>送出</button>
        </div>
    )
}


TodoHeader.propTypes = {
    todo: PropTypes.any,
    onChangeText: PropTypes.func,
    onCreateTodo: PropTypes.func,
}

export default TodoHeader



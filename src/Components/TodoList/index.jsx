import React from "react"
import PropTypes from "prop-types"
TodoList.propTypes={
    todos: PropTypes.array, 
    onTodoClick: PropTypes.func  
}
TodoList.defaultProps={
    todos: [],
    onTodoClick: null
}
function TodoList(props){
    const{todos, onTodoClick} = props 
    function handleClick(todo){
        if(onTodoClick){
            onTodoClick(todo)
        }
    }
return(
    <ul className="todo-list">
        {todos.map(todo =>(
            <div>
            <li key={todo.id} >{todo.title}</li>
            <button onClick={() => handleClick(todo)}>Delete</button>
            </div>
        ))}
    </ul>
)
}
export default TodoList
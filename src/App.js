import React, {useState} from "react"
import TodoForm from "./Components/TodoForm"
import TodoList from "./Components/TodoList"
function App(){
    const[todoList, setTodoList] = useState([
        {id: 1, title: 'a'},
        {id: 2, title: 'b'},
        {id: 3, title: 'c'}
    ])
    function HandleRemoveClick(todo){
        const newTodoList = todoList.filter(x => x.id !== todo.id)
        setTodoList(newTodoList)
    }
    function handleToDoFormSubmit(formValues){
        console.log('Form submit: ', formValues)
        const newTodo={
            id: todoList.length + 1,
           ...formValues,
        };
        const newTodoList=[... todoList];
        newTodoList.push(newTodo)
        setTodoList(newTodoList)
    }
    return(
        <div>
        <TodoForm onSubmit={handleToDoFormSubmit} />
        <TodoList todos={todoList} onTodoClick={HandleRemoveClick}/>
        </div>
    )
}
export default App
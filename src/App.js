import React, {useState} from "react"
import TodoList from "./Components/TodoList"
function App(){
  const[todoList, setTodoList] = useState([
    {id: 1, title: 'a'},
    {id: 2, title: 'b'},
    {id: 3, title: 'c'}
  ])
  function handleRemoveClick(todo){
    const newTodoList = todoList.filter((x) => x.id !== todo.id)
    setTodoList(newTodoList)
  }
  return(
    <div>
      <TodoList todos={todoList} onTodoClick={handleRemoveClick}/>
    </div>
  )
}
export default App
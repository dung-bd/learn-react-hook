import React, {useState, useEffect} from "react"
import TodoForm from "./Components/TodoForm"
import TodoList from "./Components/TodoList"
import PostList from "./Components/PostList"
function App(){
    const[todoList, setTodoList] = useState([
        //{id: 1, title: 'do homework'},
        //{id: 2, title: 'wash the dishes'},
        //{id: 3, title: 'cook the meal'}
    ])
    const[postList, setPostList] = useState([])

    useEffect(() => {
        async function fetchPostList(){
            try{
           const requestUrl = 'http://js-post-api.herokuapp.com/api/posts?_limit=10&_page=1'
           const response = await fetch(requestUrl)
           const responseJSON = await response.json()
           console.log({ responseJSON })
           const{data} = responseJSON
           setPostList(data)
            }catch(error){
                console.log('Failed to fetch the post list: ', error.message);
            }
        }
        fetchPostList()
    }, [])
    function handleRemoveClick(todo){
        const newTodoList = todoList.filter((x)=>x.id !== todo.id)
        setTodoList(newTodoList)
    }
    function handleToDoFormSubmit(formValues){
      console.log("Form submit: ", formValues)
      const newTodo ={
          id: todoList.length + 1,
          ... formValues,
      }
      const newTodoList = [...todoList]
      newTodoList.push(newTodo)
      setTodoList(newTodoList)
    }
    return(
        <div>
            <h1>PostList</h1>
            <PostList posts= {postList} /> 
            {/* <h1>Welcome to my todoApp</h1> */}
        {/* <TodoForm onSubmit={handleToDoFormSubmit}/> */}
        {/* <TodoList todos={todoList} onTodoClick={handleRemoveClick} /> */}
        </div>
    )
}
export default App

import { useEffect, useState } from 'react';
import Form from './component/Form';
import Header from './component/Header';
import Layout from './component/Layout';
import Lists from './component/Lists';

const getDataTodos =()=>{
  const data = localStorage.getItem('todos')
  if(data){
    return JSON.parse(data)
  }else{
    return []
  }
}

function App() {

  const [todo, setTodo] = useState("")
  const [todos, setTodos] = useState(getDataTodos())
  const [error, setError] = useState(null)


  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos))
  }, [todos])




  const handleSubmit = (e) => {
    e.preventDefault()

    if (todo.length < 5) {
      setError("Enter your job (at least 5 characters)")
      return false
    }

    setTodos([...todos, { id: Date.now(), title: todo, done: false }])
    setError(null)
    setTodo("")
  }

  const deleteHandler = (todoId) => {
    if (window.confirm('Are you sure?')) {
      const updateTodo = todos.filter((item) => item.id !== todoId)
      setTodos(updateTodo)
    }

  }

  const doneHandler = (todoId) => {
    const index = todos.findIndex((item) => item.id === todoId)
    const duplicateTodos = [...todos]

    duplicateTodos[index] = {
      id: todos[index].id,
      title: todos[index].title,
      done: !todos[index].done
    }

    setTodos(duplicateTodos)
  }


  return (
    <Layout>
      <Header />
      <Form
        todo={todo}
        submit={handleSubmit}
        change={(e) => setTodo(e.target.value)}
        error={error}
      />
      <Lists todos={todos} del={deleteHandler} done={doneHandler} />

    </Layout>
  );
}

export default App

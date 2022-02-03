import {useState, useEffect} from 'react'
import TodoItem from './TodoItem.js'
import { Grid } from '@mui/material';
import { Container } from '@mui/material';
import './TodoArea.css'

function TodoArea(){

    const [todos, setTodos] = useState(() => JSON.parse(localStorage.getItem("todos")))

    useEffect(() => {
        localStorage.setItem("todos", JSON.stringify(todos))
    }, [todos])
    
    const [inputText, setInputText] = useState('')

    const handleChangeInput = (event) => {
        setInputText(event.target.value)
    }

    const handleSubmitForm = (event) => {

        event.preventDefault()

        if(inputText) {
            const newItem = {
                id: Math.random().toString(36).substring(2,9),
                task: inputText,
                complete: false
            }
            setTodos([...todos, newItem])
        }
            
        setInputText('')

        
    }


    const deleteTask = (id) => {
        setTodos([...todos.filter((todo) => todo.id !== id)])
    }

    const completeTask = (id) => {
        setTodos([
            ...todos.map((todo) => 
                todo.id === id ? {...todo, complete: !todo.complete} : {...todo}
            )
        ])
    }



    return (

        <Container >
            <div className="container-title">Todo List</div>
            
            <form className="form" onSubmit={handleSubmitForm}>
                <Grid container 
                spacing={2}
                justifyContent='center'
                
                >

                    <Grid item xs={12} sm={8} md={8} >
                        
                        <input className="inputText" value={inputText} onChange={handleChangeInput}></input>
                        
                    </Grid>

                    <Grid item xs={12} sm={3} md={2}>
                        
                        <button className="main-button" type="submit">Add task</button>
                        
                    </Grid>

                </Grid>
            </form>
    
    {todos && 
    todos.map((todo) => {
                return (

                    <TodoItem 
                    todo={todo}
                    key={todo.id}
                    deleteTask={deleteTask}
                    completeTask={completeTask}
                    >

                    </TodoItem>
                )
            })}
            
           
        </Container>
    )
}

export default TodoArea
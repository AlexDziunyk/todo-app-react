import './TodoItem.css'
import basket from '../images/basket.png'

function TodoItem ({todo, completeTask, deleteTask}){


    return (
        
        <div className={todo.complete ? "item-container-complete" : "item-container-nocomplete"} key={todo.id}>

            <div className="item-delete" onClick={() => deleteTask(todo.id)}>
                <img src={basket} alt="basket"></img>
            </div>

            <div 
            className={todo.complete ? "item-complete" : "item-nocomplete"}
            onClick={() => completeTask(todo.id)} 
            >
                {todo.task}
            </div>

            


        </div>
    )
}

export default TodoItem
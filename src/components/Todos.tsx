"use client"

import { useTodos } from "@/store/Todos"
import { todo } from "node:test";
import { useSearchParams } from "next/navigation";

const Todos=()=>{

    const {todos,ToggletodoAsCompleted,handleTodoDelete} = useTodos();
    const searchParams = useSearchParams();    
    const todosFilter = searchParams.get('todos');

    let filterTodos = todos
    if(todosFilter==='active'){
        filterTodos = filterTodos.filter((todo)=>!todo.completed)
    }else if(todosFilter==='completed'){
        filterTodos = filterTodos.filter((todo)=>todo.completed)
    }

    return (
        <ul>
            {
                filterTodos.map((todo)=>{
                    return <li key={todo.id}>
                        <input type="checkbox" name="" id={`todo-${todo.id}`} checked={todo.completed} onChange={()=>ToggletodoAsCompleted(todo.id)} />
                        <label htmlFor={`todo-${todo.id}`}>{todo.task}</label>
                        {
                            todo.completed && (
                                <button type="button" onClick={()=>handleTodoDelete(todo.id)}>Delete</button>
                            )
                        }
                    </li>
                })
            }

        </ul>
    )
}

export default Todos
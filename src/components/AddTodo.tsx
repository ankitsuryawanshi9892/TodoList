'use client'
import { useTodos } from "@/store/Todos";
import React, { FormEvent, useState } from "react";

const AddTodo = () =>{
    const [todo, setTodo] = useState("")
    const {handleAddTodo} = useTodos();
    const handleFormSubmit = (e:FormEvent<HTMLFormElement>) =>{
        e.preventDefault();
        handleAddTodo(todo);
        setTodo("");

    }

    return (
        <form onSubmit={handleFormSubmit}>
            <input type="text" name="" placeholder="Write your task" id="" value={todo} onChange={(event)=>{setTodo(event.target.value)}} />
            <button type="submit">Add</button>
        </form>
    )
}
export default AddTodo
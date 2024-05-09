import React from "react";
import AddTodo from "@/components/AddTodo";
import Todos from "@/components/Todos";
import Navbar from "@/components/Navbar";
import './globals.css'
import { RiCalendarTodoFill } from "react-icons/ri";
const Page = () =>{
  return (
    <main>
      <h2><RiCalendarTodoFill /> TODO NEXT + TYPESCRIPT <RiCalendarTodoFill /></h2>
      <Navbar/>
      <AddTodo/>
      <Todos/>
    </main>
  )
}

export default Page
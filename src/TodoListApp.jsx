import { useState } from 'react'
import './todolist.css'
import Button from './components/Button'
import TodoItemEmpty from './components/TodoItemEmpty'
import TodoHeader from './components/TodoHeader.jsx'
import Checkbox from './components/Checkbox.jsx'
import TodoAdder from './components/TodoAdder.jsx'
import TodoItem from './components/TodoItem.jsx'
import TodoList from './components/TodoList.jsx'
// import './App.css'

function TodoListApp() {
    return (
        <div className='todo'>
            <TodoHeader />
            <TodoAdder />
            <TodoList />
        </div>
    )
}

export default TodoListApp
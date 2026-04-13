import { useState } from 'react'
import './todolist.css'
import Button from './components/Button'
import TodoItemEmpty from './components/TodoItemEmpty'
import TodoHeader from './components/TodoHeader.jsx'
import Checkbox from './components/Checkbox.jsx'
// import './App.css'

function TodoListApp() {
    return (
        <div className='todo'>
            <TodoHeader />
            <form className='todo__form'>
                <input type="text" className='todo__input' name="" id="" placeholder='할 일을 입력하세요' />
                <Button className='todo__button todo__button--add'>add</Button>
            </form>
            <ul className='todo__list'>
                <TodoItemEmpty />
                <li className='todo__item todo__complete'>
                    <Checkbox id="1">놀기</Checkbox>
                    <Button className='todo__button todo__button--edit'>✏️</Button>
                    <Button className='todo__button todo__button--delete'>❌</Button>
                </li>
                {/* <li>
                    <input type="checkbox" name="" id="ck-2" />
                    <label htmlFor="ck-2">집가기</label>
                    <button>✏️</button>
                    <button>❌</button>
                </li> */}
            </ul>
        </div>
    )
}

export default TodoListApp
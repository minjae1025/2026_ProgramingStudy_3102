import { useState } from 'react'
import './todolist.css'
import Button from './components/Button'
// import './App.css'

function TodoListApp() {
    return (
        <div className='todo'>
            <h1 className='todo__title'>Todo List</h1>
            <form className='todo__form'>
                <input type="text" className='todo__input' name="" id="" placeholder='할 일을 입력하세요' />
                <Button className='todo__button todo__button--add'>add</Button>
            </form>
            <ul className='todo__list'>
                <li className="todo__item todo__item--empty">
                    <p>할 일 없음</p>
                </li>
                <li className='todo__item todo__complete'>
                    <input type="checkbox" name="" id="ck-1" className='todo__check' />
                    <label htmlFor="ck-1" className='todo__label'>놀기</label>
                    <Button className='todo__button todo__button--edit'>✏️</Button>
                    <Button className='todo__button todo__button--delete'>❌</Button>
                </li>
                <li>
                    <input type="checkbox" name="" id="ck-2" />
                    <label htmlFor="ck-2">집가기</label>
                    <button>✏️</button>
                    <button>❌</button>
                </li>
            </ul>
        </div>
    )
}

export default TodoListApp
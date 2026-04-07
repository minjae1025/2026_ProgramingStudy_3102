import { useState } from 'react'
import './todolist.css'
// import './App.css'

function TodoListApp() {
    return (
        <div className='todo'>
            <h1 className='todo__title'>Todo List</h1>
            <form className='todo__form'>
                <input type="text" className='todo__input' name="" id="" placeholder='할 일을 입력하세요' />
                <button className='todo__button todo__button--add'>add</button>
            </form>
            <div className='todo__list'>
                <li className='todo__item todo__complete'>
                    <input type="checkbox" name="" id="ck-1" className='todo__check' />
                    <label htmlFor="ck-1" className='todo__label'>놀기</label>
                    <button className='todo__button todo__button--edit'>✏️</button>
                    <button className='todo__button todo__button--delete'>❌</button>
                </li>
                <li>
                    <input type="checkbox" name="" id="ck-2" />
                    <label htmlFor="ck-2">집가기</label>
                    <button>✏️</button>
                    <button>❌</button>
                </li>
            </div>
        </div>
    )
}

export default TodoListApp
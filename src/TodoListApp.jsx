import { useState } from 'react'
// import './App.css'

function TodoListApp() {
    return (
        <div>
            <h1>Todo List</h1>
            <form>
                <input type="text" name="" id="" placeholder='할 일을 입력하세요' />
                <button>todo</button>
            </form>
            <div>
                <ul>
                    <li>
                        <input type="checkbox" name="" id="ck-1" />
                        <label htmlFor="ck-1">놀기</label>
                        <button>✏️</button>
                        <button>❌</button>
                    </li>
                    <li>
                        <input type="checkbox" name="" id="ck-2" />
                        <label htmlFor="ck-2">집가기</label>
                        <button>✏️</button>
                        <button>❌</button>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default TodoListApp
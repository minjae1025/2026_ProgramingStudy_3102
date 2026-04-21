import './todolist.css'
// import Button from './components/Button'
// import TodoItemEmpty from './components/TodoItemEmpty'
import TodoHeader from './components/TodoHeader.jsx'
// import Checkbox from './components/Checkbox.jsx'
import TodoAdder from './components/TodoAdder.jsx'
// import TodoItem from './components/TodoItem.jsx'
import TodoList from './components/TodoList.jsx'
// import './App.css'
import { useEffect, useState } from 'react';

class Todo {
    constructor(text) {
        this.id = Date.now();
        this.text = text;
        this.isCompleted = false;
    }
}

function TodoListApp() {
    const [todos, setTodos] = useState([]); //todos는 현재 투 두 값, setTodos는 투 두 값을 업데이트하는 함수
    const addTodo = (text) => setTodos((todos) => [...todos, new Todo(text)]);

    const toggleTodo = (id) => {
        setTodos((todos) => 
            todos.map((todo) =>
                todo.id === id ? {...todo, isCompleted: !todo.isCompleted} : todo
            )
        );
    }

    const deleteTodo = (id) => {
        setTodos((todos) => todos.filter((todo) => todo.id !== id));
    }

    const editTodo = (id, editText) => {
        setTodos((todos) =>
            todos.map((todo) =>
                todo.id === id ? {...todo, text: editText} : todo
            )
        );
    }

    return (
        <div className='todo'>
            <TodoHeader />
            <TodoList todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo} editTodo={editTodo} />
            <TodoAdder addTodo={addTodo} />
        </div>
    )
}

export default TodoListApp
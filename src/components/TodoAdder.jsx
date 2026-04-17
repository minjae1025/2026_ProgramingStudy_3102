import { useState } from 'react';
import Button from './Button'

export default function TodoAdder({ addTodo }) {
    const [inputTodo, setInputTodo] = useState('');
    const handleSubmit = (e) => {
        e.preventDefault();
        if (!inputTodo) return;
        addTodo(inputTodo.trim());
        setInputTodo('');
    }
    
    return (
        <form className='todo__form' onSubmit={handleSubmit}>
            <input 
                type="text" 
                className='todo__input' 
                placeholder='할 일을 입력하세요' 
                value={inputTodo}
                onChange={(e) => setInputTodo(e.target.value)}
            />
            <Button className='todo__button todo__button--add'>add</Button>
        </form>
    )
};

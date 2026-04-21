import { useState } from 'react'
import Button from './Button'
import Checkbox from './Checkbox'

export default function TodoItem({ todo, toggleTodo, deleteTodo, editTodo }) {
    const [editText, setEditText] = useState(todo.text);
    const [isEditing, setIsEditing] = useState(false);
    const handleEditText = (e) => {
        if (!isEditing) {
            setEditText(todo.text);
            setIsEditing(true);
        }
        else {
            const trimmedText = editText.trim();
            if (trimmedText != '' && trimmedText != todo.text) {
                editTodo(todo.id, editText);
            }
            setIsEditing(false);
        }

    };

    return (
        <li className={`todo__item ${todo.isCompleted ? 'todo__item--complete' : ''}`}>
            {!isEditing && (
                <Checkbox id={todo.id} checked={todo.isCompleted} onChange={() => toggleTodo(todo.id)}>
                    {todo.text}
                </Checkbox>
            )}
            {isEditing && (
                <input
                    type="text"
                    className='todo__item--edit'
                    value={editText}
                    onChange={(e) => setEditText(e.target.value)}
                    autoFocus
                    onKeyDown={(e) => e.key === 'Enter' && handleEditText() }
                />
            )}
            <Button className='todo__button todo__button--edit' onClick={handleEditText}>
                {isEditing ? '💾' : '✏️'}
            </Button>
            <Button className='todo__button todo__button--delete' onClick={() => deleteTodo(todo.id)}>
                ❌
            </Button>
        </li>
    )
};

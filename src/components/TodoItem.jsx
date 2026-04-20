import Button from './Button'
import Checkbox from './Checkbox'

export default function TodoItem({ todo }) {
    return (
        <li className={`todo__item ${todo.isCompleted ? 'todo__item--completed' : ''}`}>
            <Checkbox id={todo.id}>{todo.text}</Checkbox>
            <Button className='todo__button todo__button--edit'>✏️</Button>
            <Button className='todo__button todo__button--delete'>❌</Button>
        </li>
    )
};

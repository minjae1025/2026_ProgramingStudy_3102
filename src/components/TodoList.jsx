import TodoItemEmpty from './TodoItemEmpty'
import TodoItem from "./TodoItem"

export default function TodoList(props) {
    return (
        <ul className='todo__list'>
            <TodoItemEmpty />
            <TodoItem />
        </ul>
    )
};

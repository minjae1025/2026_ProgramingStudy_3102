import TodoItemEmpty from './TodoItemEmpty'
import TodoItem from "./TodoItem"

export default function TodoList({ todos }) {
    return (
        <ul className='todo__list'>
            {/* todos가 비어있으면 todo 없으면 TodoItemEmpty */}
            {todos.length === 0 && <TodoItemEmpty />}
            {/* todos가 있으면 TodoItem  */}
            {todos.length > 0 && todos.map((todo) => 
                <TodoItem key={todo.id} todo={todo} />
            )}
        </ul>
    )
};

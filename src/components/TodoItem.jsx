import Button from './Button'
import Checkbox from './Checkbox'

export default function TodoItem(props) {
    return (
        <li className='todo__item todo__complete'>
            <Checkbox id="1">놀기</Checkbox>
            <Button className='todo__button todo__button--edit'>✏️</Button>
            <Button className='todo__button todo__button--delete'>❌</Button>
        </li>
    )
};

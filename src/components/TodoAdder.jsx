import Button from './Button'

export default function TodoAdder() {
    return (
        <form className='todo__form'>
            <input type="text" className='todo__input' name="" id="" placeholder='할 일을 입력하세요' />
            <Button className='todo__button todo__button--add'>add</Button>
        </form>
    )
};

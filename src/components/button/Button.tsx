import { useSelector, useDispatch } from 'react-redux'
import { decrementCounterAction } from '../../store/module/counter/actions'
import { counterSelector } from '../../store/module/counter/selectors'

const Button = () => {
    const dispatch = useDispatch()
    const counter: any = useSelector(counterSelector)
    
    const handlerDecrementClick = () => {
        dispatch(decrementCounterAction(counter.number))
    }

    return (
        <button onClick={handlerDecrementClick}>Decrement</button>
    )
}

export default Button

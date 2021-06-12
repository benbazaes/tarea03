const initialState = {
    number: 0,
    bla: 'foo',
}

const counterReducer = (prevState: any = initialState, action: any) => {    
    switch (action.type) {
        case 'COUNTER_DECREMENT':
            return {
                number: action.payload,
                bla: 'foo',
            }
        case 'COUNTER_INCREMENT':
            return {
                number: action.payload,
                bla: 'foo',
            }
        default:
            return prevState
    }
}

export default counterReducer
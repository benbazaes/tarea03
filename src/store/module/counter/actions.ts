export const decrementCounterAction = (number: number) => {
    return {
        type: 'COUNTER_DECREMENT',
        payload: number - 1,
    }
}

export const incrementCounterAction = (number: number) => {
    return {
        type: 'COUNTER_INCREMENT',
        payload: number + 1,
    }
}
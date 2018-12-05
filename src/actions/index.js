export const createAction = (amount) => {
    return {
        type: 'WITHDRAW',
        payload: {
            amount
        }
    };
}

export const resetAction = () => {
    return {
        type: 'RESET'
    };
}
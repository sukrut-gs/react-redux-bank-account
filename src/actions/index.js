export const createAction = (amount) => {
    return {
        type: 'WITHDRAW',
        payload: {
            amount
        }
    };
}
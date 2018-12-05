const bankReducer = (state, action) => {
    
    switch(action.type) {
        case 'WITHDRAW':
            const oldState = {...state};
            if(oldState.balance >= action.payload.amount) {
                oldState.message = 'Success...';
                oldState.balance -= action.payload.amount;
            } else {
                oldState.message = 'Not enough balance...';
            }
            return oldState;
        case 'RESET':
            return {...state, balance: 1000, message: ''}
        default:
            return state;
    }
}

export default bankReducer;
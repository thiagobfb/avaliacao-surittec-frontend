const userKey = '_avaliacao_user'

const INITIAL_STATE = {
    token: JSON.parse(localStorage.getItem(userKey)),
    validToken: false
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'TOKEN_VALIDATED':
            if (action.payload) {
                return { ...state, validToken: true }
            } else {
                localStorage.removeItem(userKey)
                return { ...state, validToken: false, token: null }
            }
        case 'USER_FETCHED':
            console.log('USER_FETCHED Payload ' + JSON.stringify(action.payload) + ' State ' + state)
            localStorage.setItem(userKey, JSON.stringify(action.payload))
            debugger
            return { ...state, token: action.payload, validToken: true }
        default:
            return state
    }
}
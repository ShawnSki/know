const initialState = {
    id: '',
    firstname: '',
    lastname: '',
    email: '',
    company: ''
}

const UPDATE_ADMIN = 'UPDATE_ADMIN';
const CLEAR_ADMIN = 'CLEAR_ADMIN';

export function updateAdmin(admin) {
    return {
        type: UPDATE_ADMIN,
        payload: admin
    }
}

export function clearAdmin() {
    return {
        type: CLEAR_ADMIN
    }
}

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case UPDATE_ADMIN:
            const { id, firstname, lastname, email, company } = action.payload
            return {...state, id, firstname, lastname, email, company}
        case CLEAR_ADMIN:
                return { ...initialState }
                default:
                    return state
                }
}
            
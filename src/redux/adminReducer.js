// import axios from 'axios';

const initialState = {
    firstname: '',
    lastname: '',
    email: '',
    company: ''
}

const UPDATE_ADMIN = 'UPDATE_ADMIN';
const CLEAR_ADMIN = 'CLEAR_ADMIN';

export const updateAdmin = (adminObj) => {
    return {
        type: UPDATE_ADMIN,
        payload: adminObj
    }
}


export function clearAdmin() {
    return {
        type: CLEAR_ADMIN
    }
}

export default function (state = initialState, action) {
    switch (action.type) {
        case UPDATE_ADMIN:
            const { firstname, lastname, email, company } = action.payload
            return {...state, firstname, lastname, email, company}
        case CLEAR_ADMIN:
                return { ...initialState }
                default:
                    return state
                }
            }       
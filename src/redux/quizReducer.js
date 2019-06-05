const initialState = {
    quiz_title: '',
    quiz_intro: '',
    quiz_bg_img: ''
}

const UPDATE_QUIZ = 'UPDATE_QUIZ';
const CLEAR_QUIZ = 'CLEAR_QUIZ';

export function updateQuiz(quiz) {
    return {
        type: UPDATE_QUIZ,
        payload: quiz
    }
}

export function clearQuiz() {
    return {
        type: CLEAR_QUIZ
    }
}

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case UPDATE_QUIZ:
            const { quiz_title, quiz_intro, quiz_bg_img } = action.payload
            return { ...initialState, quiz_title, quiz_intro, quiz_bg_img }
        case CLEAR_QUIZ:
            return { ...initialState }
        default:
            return state
    }
}
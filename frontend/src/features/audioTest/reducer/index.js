// index.js
import { SET_FEEDBACK, UPDATE_FORM, SUBMIT_FORM_SUCCESS, SUBMIT_FORM_FAILURE } from './actionTypes';

const initialState = {
    feedback: {
        option1: '',
        option2: '',
        option3: ''
    },
    options: [
        { feedback: '' },
        { feedback: '' },
        { feedback: '' }
    ],
    formData: {
        FirstName: '',
        LastName: '',
        Name: '',
        Email: '',
        Password: '',
        Phone: ''
    },
    submitMessage: '',
    error: null
};

function feedbackReducer(state = initialState, action) {
    switch (action.type) {
        case SET_FEEDBACK:
            return {
                ...state,
                feedback: {
                    ...state.feedback,
                    [action.payload.option]: action.payload.feedback
                }
            };

        case UPDATE_FORM:
            return {
                ...state,
                formData: {
                    ...state.formData,
                    [action.payload.name]: action.payload.value
                }
            };
        case SUBMIT_FORM_SUCCESS:
            return {
                ...state,
                submitMessage: action.payload,
                error: null
            };
        case SUBMIT_FORM_FAILURE:
            return {
                ...state,
                error: action.payload
            };
        case 'UPDATE_OPTION_FEEDBACK':
            return {
                ...state,
                options: state.options.map((option, index) =>
                    index === action.payload.optionIndex ? { ...option, feedback: action.payload.feedback } : option
                )
            };
        default:
            return state;
    }
}

export default feedbackReducer;

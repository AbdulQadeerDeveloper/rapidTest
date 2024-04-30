// actions.js
import { SET_FEEDBACK, UPDATE_FORM, SUBMIT_FORM_SUCCESS, SUBMIT_FORM_FAILURE } from './actionTypes';


// Define Redux actions to handle setFeedback 
export const setFeedback = (option, feedback) => ({
    type: SET_FEEDBACK,
    payload: { option, feedback }
});


// Define Redux actions to handle updateForm options and feedback
export const updateForm = (name, value) => ({
    type: UPDATE_FORM,
    payload: { name, value }
});

export const submitFormSuccess = message => ({
    type: SUBMIT_FORM_SUCCESS,
    payload: message
});

export const submitFormFailure = error => ({
    type: SUBMIT_FORM_FAILURE,
    payload: error
});


// Define Redux actions to handle updating options and feedback
export const updateOptionFeedback = (optionIndex, feedback) => ({
    type: 'UPDATE_OPTION_FEEDBACK',
    payload: { optionIndex, feedback }
  });
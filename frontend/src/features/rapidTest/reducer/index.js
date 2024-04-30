// index.js
import { SET_TEST_TYPE, SET_VERSION_COUNT, UPLOAD_FILE, SET_TEST_NAME, SET_TEST_DESCRIPTION } from './actionType';

const initialState = {
    testType: '',
    versionCount: 1,
    files: [],
    testName: '',
    testDescription: ''
};

function testReducer(state = initialState, action) {
    switch (action.type) {
        case SET_TEST_TYPE:
            return { ...state, testType: action.payload };
        case SET_VERSION_COUNT:
            return { ...state, versionCount: action.payload };
        case UPLOAD_FILE:
            const newFiles = [...state.files];
            newFiles[action.payload.fileIndex] = action.payload.file;
            return { ...state, files: newFiles };
        case SET_TEST_NAME:
            return { ...state, testName: action.payload };
        case SET_TEST_DESCRIPTION:
            return { ...state, testDescription: action.payload };
        default:
            return state;
    }
}

export default testReducer;

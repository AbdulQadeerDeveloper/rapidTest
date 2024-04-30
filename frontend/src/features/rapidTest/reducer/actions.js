// actions.js
import {SET_TEST_TYPE,SET_VERSION_COUNT, UPLOAD_FILE,SET_TEST_NAME,SET_TEST_DESCRIPTION} from "./actionType";
export const setTestType = payload => ({ type: SET_TEST_TYPE, payload });
export const setVersionCount = payload => ({ type: SET_VERSION_COUNT, payload });
export const uploadFile = (fileIndex, file) => ({ type: UPLOAD_FILE, payload: { fileIndex, file } });
export const setTestName = payload => ({ type: SET_TEST_NAME, payload });
export const setTestDescription = payload => ({ type: SET_TEST_DESCRIPTION, payload });

import BACKEND_URL_APPLICATION from "../utils/index.js";

export const API_END_POINTS = {
    USER_REGISTRATION: `${BACKEND_URL_APPLICATION}/api/register`,
    USER_LOGIN: `${BACKEND_URL_APPLICATION}/api/login`,
    USER_FORGOT_PASSWORD:`${BACKEND_URL_APPLICATION}/api/forgot-password`,
    USER_RESET_PASSWORD:`${BACKEND_URL_APPLICATION}/api/reset-password/:id/:token`,
    
};



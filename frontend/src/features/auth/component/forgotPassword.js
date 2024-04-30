import React, { useRef, useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import { forgotPassword } from '../reducer/action';
import { useDispatch } from 'react-redux';
import swal from 'sweetalert'; // Import SweetAlert


const ForgotPassword = () => {

    const [email, setEmail] = useState()
    const navigate = useNavigate()
    const dispatch = useDispatch();
    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(forgotPassword(email))
            .then((response) => {
                swal("Check Your Email", "A link to reset your password has been sent to your email address. Please check your inbox and follow the instructions to reset your password.", "success")
                    .then((value) => {
                    });
            })
            .catch((error) => {
                swal("Error!", "An error occurred while attempting to reset your password. Please ensure the email is correct and try again.", "error");
            });
    };

    return (
        <div className='container'>
            <form onSubmit={handleSubmit}>
               
                <div className="form-group">
                    <input
                        type="email"
                        placeholder="Enter Email"
                        autoComplete="off"
                        name="email"
                        className="form-control rounded-0"
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>


                <div className="field">
                    <input type="submit" value="Send E-mail" />
                </div>
            </form>
        </div>
    );
};

export default ForgotPassword;

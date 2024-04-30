import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { resetPassword } from '../reducer/action';
import { Link, useNavigate } from 'react-router-dom';
import swal from 'sweetalert';

const ResetPassword = () => {
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(resetPassword(password))
            .then((response) => {
                swal("Success!", "Your password has been reset successfully. Please log in with your new password.", "success")
                    .then(() => {
                        navigate('/login');
                    });
            })
            .catch((error) => {
                // Handle failure scenario (e.g., email not found in the database)
                swal("Failed!", "The email provided does not match any account in our records. Please try again.", "error");
            });
    };
    return (
        <React.Fragment>

            <div className='container'>
                <form onSubmit={handleSubmit}>
                
                    <div className="form-group">

                        <label htmlFor="password">New Password:</label>
                        <input
                            type="password"
                            id="password"
                            className="form-control"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <div className="field  mt-3">
                        <input type="submit" value="Reset Password" />
                    </div>

                    <div className="form-group mt-3">
                        <div className='row'>
                            <div className='col-md-10 mt-3'>
                                <Link to="/register">Signup new account</Link>
                            </div>
                            <div className="col-md-2 field">
                                <Link to="/register">Next</Link>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </React.Fragment>
    );
};

export default ResetPassword;

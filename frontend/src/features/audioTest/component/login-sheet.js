import React, { useState } from 'react';
import { updateForm, submitFormSuccess, submitFormFailure } from './audioTest/reducer/action';


function GoogleSheet({ formData, updateForm, submitFormSuccess, submitFormFailure }) {
    const scriptURL = 'https://script.google.com/macros/s/AKfycbxHpAhfFaR01yiKz5A89zJOt6wBQDAv8AaCtZEYnvvfSDBsat5ZYY83IirBTM7VcIeF5g/exec';
    console.log(scriptURL);
    console.log("scripting testing");

    
    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        console.log(form);
        console.log("test");
        fetch(scriptURL, { method: 'POST', body: new FormData(form) })
            .then(console.log(scriptURL, "get response script"))
            .then(response => alert("Thank you! your form is submitted successfully."))
            .then(() => { window.location.reload(); })
            .catch(error => console.error('Error!', error.message));
        console.log("tasting fast scripting");
        console.log(scriptURL);
        console.log("Get response");

    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        updateForm(name, value);
    };

    return (
        <div className="container">
            <form onSubmit={handleSubmit} name="contact-form" border="1">
                <div className="mb-3">
                    <label htmlFor="firstName" className="form-label">First Name:</label>
                    <input type="text" value={formData.FirstName} onChange={handleChange} className="form-control" id="firstName" name="FirstName" />
                </div>
                <div className="mb-3">
                    <label htmlFor="lastName" className="form-label">Last Name:</label>
                    <input type="text" value={formData.LastName} onChange={handleChange} className="form-control" id="lastName" name="LastName" />
                </div>
                <div className="mb-3">
                    <label htmlFor="name" className="form-label">Name:</label>
                    <input type="text" value={formData.Name} onChange={handleChange} className="form-control" id="name" name="Name" />
                </div>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email:</label>
                    <input type="email" value={formData.Email} onChange={handleChange} className="form-control" id="email" name="Email" />
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Password:</label>
                    <input type="password" value={formData.Password} onChange={handleChange} className="form-control" id="password" name="Password" />
                </div>
                <div className="mb-3">
                    <label htmlFor="phone" className="form-label">Phone:</label>
                    <input type="text" value={formData.Phone} onChange={handleChange} className="form-control" id="phone" name="Phone" />
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    );
}

export default GoogleSheet;

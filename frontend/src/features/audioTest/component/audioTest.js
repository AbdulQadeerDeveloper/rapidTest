import React from 'react'
import { FaPen } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { MdGraphicEq } from "react-icons/md";
import { SiAudiomack } from 'react-icons/si';
import { connect } from 'react-redux';
import { setFeedback } from './login-sheet/reducer/action';

function AudioTest({ feedback, setFeedback }) {
    const handleFeedbackChange = (option, e) => {
        setFeedback(option, e.target.value);
    };
    return (
        <div className="container">
            <div className="heading">
                <h1><MdGraphicEq /> RapidTest.<span className="color-ai">AI</span></h1>
            </div>
            <div className="Get-heading-start">
                <h1>Preview</h1>
                <div className="row">
                    <div className="col-md-6"></div>
                    <div className="col-md-6 text-right">
                        <button>Submit</button>
                    </div>
                </div>
            </div>
            <div className="table-wrapper">
                {options.map((option, index) => (
                    <div key={index}>
                        <div className="row">
                            <div className="col-md-4 col-sm-12">
                                <h4>Option {index + 1}</h4>
                                <input
                                    type="text"
                                    className="form-control"
                                    value={option.feedback}
                                    onChange={(e) => handleFeedbackChange(index, e)}
                                    placeholder={`Feedback for Option ${index + 1}`}
                                    style={{ border: "1px solid black" }}
                                />
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );


}


const mapStateToProps = (state) => ({
    feedback: state.feedback
});

const mapDispatchToProps = {
    setFeedback
};

export default connect(mapStateToProps, mapDispatchToProps)(AudioTest);
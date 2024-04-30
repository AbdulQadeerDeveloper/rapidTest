import React from 'react'
import { FaPen } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { MdGraphicEq } from "react-icons/md";
import { SiAudiomack } from 'react-icons/si';
import { connect } from 'react-redux';
import { updateOptionFeedback } from './audioTest/reducer/action';
function VideoTestView({ options, updateOptionFeedback }) {

    const handleFeedbackChange = (optionIndex, e) => {
        updateOptionFeedback(optionIndex, e.target.value);
    };


    return (
        <div className='container'>
            <div className='heading'>
                <h1><span><MdGraphicEq /></span>RapidTest.<span className='color-ai'>AI</span></h1>
            </div>
            <div className='Get-heading-start'>
                <h1>Preview</h1>
                <div className='row'>
                    <div className='col-md-6'></div>
                    <div className='col-md-6 text-right'><button>Submit</button></div>
                </div>
            </div>
            <div className='table-wrapper'>
                <tr>
                    <th>Logos for new healthcare startup  <span className='pen-audio'><FaPen /></span></th>
                </tr>
                <tr>
                    <td>
                        Description (e.g. I have created 3 different intros for my new song. I’m looking for one that creates a sense of excitement. Would love your help in finding the best fit of these
                        three options.)
                        <span className='pen-audio'><FaPen /></span>
                    </td>

                </tr>
                <tr>
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
                </tr>

            </div>
        </div>
    )
}

const mapStateToProps = (state) => ({
    options: state.options
});

const mapDispatchToProps = {
    updateOptionFeedback
};

export default connect(mapStateToProps, mapDispatchToProps)(VideoTestView);
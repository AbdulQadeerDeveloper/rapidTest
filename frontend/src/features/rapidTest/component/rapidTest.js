import React from 'react';
import { connect } from 'react-redux';
import { setTestType, setVersionCount, uploadFile, setTestName, setTestDescription } from '../reducer/actions';
import { MdOutlineFileUpload, MdGraphicEq } from "react-icons/md";
import { Link } from 'react-router-dom';

function RapidTest({
    testDetails,
    setTestType,
    setVersionCount,
    uploadFile,
    setTestName,
    setTestDescription
}) {
    const handleTestTypeChange = e => setTestType(e.target.value);
    const handleVersionCountChange = e => setVersionCount(e.target.value);
    const handleFileUpload = (index) => e => uploadFile(index, e.target.files[0]);
    const handleTestNameChange = e => setTestName(e.target.value);
    const handleTestDescriptionChange = e => setTestDescription(e.target.value);
  
   
    return (
        <div className='container'>
            <div className='row'>
                <div className='col-md-6'>
                    <div className='heading'>
                        <h1><MdGraphicEq />RapidTest.<span className='color-ai'>AI</span></h1>
                    </div>
                    <div className='Get-heading-start'>
                        <h1>Let’s get started!</h1>
                        <div className='row'>
                            <div className='col-md-6'><p>Test Panel of 5 Reviewers</p></div>
                            <div className='col-md-6'><button>Upgrade for more!</button></div>
                        </div>
                    </div>
                    <div className='msq-test-order-list'>
                        <ol>
                            <li>What do you want to test?</li>
                        </ol>
                        <div className='inline-display'>
                            <input type="radio" id="images" name="testType" value="Images" onChange={handleTestTypeChange} />
                            <label htmlFor="images">Images</label>
                            <input type="radio" id="audio" name="testType" value="Audio" onChange={handleTestTypeChange} />
                            <label htmlFor="audio">Audio Files</label>
                            <input type="radio" id="video" name="testType" value="Video" onChange={handleTestTypeChange} />
                            <label htmlFor="video">Video Files</label>
                        </div>
                        <ol start="2">
                            <li>How many versions do you want to test?</li>
                        </ol>
                        <div className='inline-display1'>
                            <input type="radio" id="one" name="versionCount" value="1" onChange={handleVersionCountChange} />
                            <label htmlFor="one">One (1)</label>
                            <input type="radio" id="two" name="versionCount" value="2" onChange={handleVersionCountChange} />
                            <label htmlFor="two">Two (2)</label>
                            <input type="radio" id="three" name="versionCount" value="3" onChange={handleVersionCountChange} />
                            <label htmlFor="three">Three (3)</label>
                            <input type="radio" id="four" name="versionCount" value="4" onChange={handleVersionCountChange} />
                            <label htmlFor="four">Four (4)</label>
                        </div>
                        <ol start="3">
                            <li>Upload your files <span>10MB per file</span></li>
                        </ol>
                        <div className='inline-display2'>
                            {[...Array(testDetails.versionCount).keys()].map(index => (
                                <div key={index}>
                                    <input type="file" id={`file${index + 1}`} onChange={handleFileUpload(index)} hidden />
                                    <label htmlFor={`file${index + 1}`} className="btn"><MdOutlineFileUpload /> <span>File {index + 1}</span></label>
                                </div>
                            ))}
                        </div>
                        <ol start="4">
                            <li>Name and describe what you are testing?</li>
                        </ol>
                        <div className="form-group">
                            <input type="text" className='form-control' placeholder="Give your test a name (e.g. Logos for new healthcare startup)" onChange={handleTestNameChange} value={testDetails.testName} />
                        </div>
                        <div className="form-group">
                            <textarea cols={30} rows={4} className='form-control' placeholder="Description (e.g. I have created 3 different intros for my new song. I'm looking for one that creates excitement. Would love help in finding the best fit of these three options.)" onChange={handleTestDescriptionChange} value={testDetails.testDescription}></textarea>
                        </div>
                    </div>
                </div>
                <div className='col-md-6 text-end'>
                    <div className='preview-btn'><Link to="/preview">See Preview</Link></div>
                </div>
            </div>
        </div>
    );
}

const mapStateToProps = state => ({
    testDetails: state
});

const mapDispatchToProps = {
    setTestType,
    setVersionCount,
    uploadFile,
    setTestName,
    setTestDescription
};

export default connect(mapStateToProps, mapDispatchToProps)(RapidTest);

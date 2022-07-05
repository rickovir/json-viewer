import React, { useState, useEffect } from "react";
import './ParsedSection.css';

const ParsedSection = (parsedValue) => {
    const [textareaHeight, setTextareaHeight] = useState(0);
    useEffect(() => {
        getTextareaHeight();
        document.getElementById('parsed-text').value = parsedValue;
    });
    const getTextareaHeight = () => {
        const offsetTop = document.querySelector('.string-section textarea')?.offsetTop;
        const windowHeight = window.innerHeight;

        setTextareaHeight((windowHeight - ((offsetTop ? offsetTop : 0) + 10)) + 'px');
    };

    return (
        <div className="parsed-section">
            <textarea 
                style={{height: textareaHeight, width: '100%', resize: 'none'}} 
                id="parsed-text">
            </textarea>
        </div>
    );
};

export default ParsedSection;

import React, { useState, useEffect } from "react";
import './StringSection.css';

const StringSection = ({ onSetValue }) => {
    const [textareaHeight, setTextareaHeight] = useState(0);
    useEffect(() => {
        getTextareaHeight();
    });
    const getTextareaHeight = () => {
        const offsetTop = document.querySelector('.string-section textarea')?.offsetTop;
        const windowHeight = window.innerHeight;

        setTextareaHeight((windowHeight - ((offsetTop ? offsetTop : 0) + 10)) + 'px');
    };
    return (
        <div className="string-section">
            <textarea 
                style={{height: textareaHeight, width: '100%', resize: 'none'}} 
                onChange={(e) => onSetValue(e.target.value)}>
            </textarea>
        </div>
    );
};

export default StringSection;
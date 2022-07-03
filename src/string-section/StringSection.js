import React, { useState, useEffect } from "react";
import './StringSection.css';

const StringSection = () => {
    const [textareaHeight, setTextareaHeight] = useState(0);
    const [stringVal, setStringVal] = useState('');
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
            <textarea style={{height: textareaHeight, width: '100%', resize: 'none'}} onChange={(e) => setStringVal(e.target.value)}></textarea>
        
            <pre>
                { stringVal }
            </pre>
        </div>
    );
};

export default StringSection;
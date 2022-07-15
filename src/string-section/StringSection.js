import React, { useState, useEffect } from "react";
import './StringSection.css';

const StringSection = ({setRaw}) => {
    const [strText, setStrText] = useState('');

    const onSetValue = (val) => {
        setRaw( val );
        setStrText( strText );
    };

    return (
        <div className="string-section">
            <textarea onChange={(e) => onSetValue(e.target.value)} defaultValue={ strText }>
            </textarea>
        </div>
    );
};

export default StringSection;
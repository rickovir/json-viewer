import React, { useState, useEffect } from "react";
import './ParsedSection.css';

const ParsedSection = (activeValue) => {
    return (
        <div className="parsed-section">
            <textarea id="textarea-parsed">
            </textarea>
        </div>
    );
};

export default ParsedSection;

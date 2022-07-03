import React from 'react';
import './TabHeader.css';

const TabHeader = ({activeTab, loadActiveTab}) => {
    return (
        <div className='tab-header'>
            <button id='btn-string' onClick={() => loadActiveTab('btn-string')} className={activeTab === 'btn-string' ? 'active': null }>String</button>
            <button id='btn-json' onClick={() => loadActiveTab('btn-json')} className={activeTab === 'btn-json' ? 'active': null }>JSON</button>
            <button id='btn-viewer' onClick={() => loadActiveTab('btn-viewer')} className={activeTab === 'btn-viewer' ? 'active': null }>Viewer</button>
        </div>
    );
};

export default TabHeader;
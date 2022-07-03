import React, { useState } from 'react';
import './App.css';
import StringSection from './string-section/StringSection';
import TabHeader from './tab-header/TabHeader';

const App = () => {
  const [activeTab, setActiveTab] = useState('btn-string');
  return (
    <div className="App">
        <h1>JSON Viewer</h1>
        <TabHeader activeTab={activeTab} loadActiveTab={(e) => setActiveTab(e)} />
        { activeTab === 'btn-string' && <StringSection /> }
    </div>
  );
}

export default App;

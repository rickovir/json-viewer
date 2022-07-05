import React, { useState } from 'react';
import './App.css';
import LoadingLayer from './loading-layer/LoadingLayer';
import ParsedSection from './parsed-section/ParsedSection';
import StringSection from './string-section/StringSection';
import TabHeader from './tab-header/TabHeader';

const App = () => {
  const [activeTab, setActiveTab] = useState('btn-string');
  const [value, setValue] = useState('');
  const [loading, setLoading] = useState(false);

  const onErrorMsg = (msg) => {
    // alert(msg);
    console.log('error')
  };

  const onStringFilled = (event) => {
    setTimeout(() => {
      try {
        const tempValue = JSON.stringify(JSON.parse(event), undefined, 2);
        setValue(tempValue);
        console.log(value)
      }
      catch (e) {
        onErrorMsg('error !');
      }
    }, 100);
  };

  return (
    <>
      { loading && <LoadingLayer />}
      <div className="App">
          <h1>JSON Viewer</h1>
          <TabHeader activeTab={activeTab} loadActiveTab={(e) => setActiveTab(e)} />
          { activeTab === 'btn-string' 
            && <StringSection onSetValue={(e) => onStringFilled(e)} /> }
          { activeTab === 'btn-json'
            && <ParsedSection parsedValue={value} /> }
      </div>
    </>
  );
}

export default App;

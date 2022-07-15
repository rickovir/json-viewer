import React, { useState, useEffect } from 'react';
import './App.css';
import { ErrorMessage } from './error-message/ErrorMessage';
import LoadingLayer from './loading-layer/LoadingLayer';
import ParsedSection from './parsed-section/ParsedSection';
import StringSection from './string-section/StringSection';

const App = () => {
  const [elHeight, setElHeight] = useState('0px');
  const [rawValue, setRawValue] = useState('');
  const [error, setError] = useState(false);

  useEffect(() => {
      getElHeight();
  });

  const onSetRawValue = (e) => {
    try {
      setError(false);
      setRawValue( e );
      const tempValue = JSON.stringify( JSON.parse(e), undefined, 4 );
      document.getElementById('textarea-parsed').value = tempValue;
    }
    catch {
      setError(true);
    }
  }

  const transformText = (str) => {
    const firstChar = str.charAt(0);
    const lastChar = str.charAt(str.length -1);

    // if(firstChar === lastChar) {
    //   if ()
    // }
  }

  const qouteRemover = (str) => {
    if(str && str.length > 0) {
      const apostropheIdx = str.indexOf(`'`);
      const quoteIdx = str.indexOf(`"`);
      const accentIdx = str.indexOf("`");

    }
  }

  const getElHeight = () => {
      const offsetTop = document.querySelector('.content')?.offsetTop;
      const windowHeight = window.innerHeight;

      setElHeight((windowHeight - ((offsetTop ? offsetTop : 0) + 10)) + 'px');
  };

  return (
      <div className="App">
          <h1>JSON Viewer</h1>
          { error && <ErrorMessage /> }
          <div className="content" style={{height: elHeight }}>
            <StringSection setRaw={onSetRawValue} />
            <ParsedSection />
          </div>
      </div>
  );
}

export default App;

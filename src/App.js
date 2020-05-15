import React from 'react';
import './App.css';
import OpenDoorButton from './components/OpenDoorButton'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={'https://theyard.com/wp-content/themes/theyard/slice/svg/logo.svg'} className="App-logo" alt="logo" />        
      </header>
      <div className="App-body">
        <OpenDoorButton
          link={'Gowanus Gate'}
          door={'6211'}
        />
        <OpenDoorButton
          link={'Gowanus Basement'}
          door={'6096'}
        />
        <OpenDoorButton
          link={'Gowanus Front Door'}
          door={'6095'}
        />
      </div>
      <div className="Footer">made by sahil agarwal</div>
    </div>
  );
}

export default App;

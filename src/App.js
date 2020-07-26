import React from 'react';
import './App.scss';
import { Provider } from 'react-redux';
import DrumMachine from './components/DrumMachine';
import store from './redux/store';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <DrumMachine />
      </div>
    </Provider>

  );
}

export default App;

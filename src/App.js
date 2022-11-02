import './App.css';
// import {Component} from 'react';
import Counter from './components/counter/counter'

function App() {
  return (
    <div className="App">
      <h1>Hello Borys</h1>
      <Counter initValue={10}/>
    </div>
  );
}

export default App;

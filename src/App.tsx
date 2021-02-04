import React, {useState} from 'react';
import './App.css';
import {Counter} from "./components/counter/Counter";

function App() {

  let [count, setCount] = useState<number>(0);

  let increaseCount = () => {
      let newCount = count + 1
      setCount(newCount)
  }
  let resetCount = () => {
      setCount(0)
  }

  return (
    <div className="App">
      <Counter increaseCount={ increaseCount }
               resetCount={ resetCount }
               count={ count } />
    </div>
  );
}

export default App;

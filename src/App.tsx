import React, {useEffect, useState} from 'react';
import './App.css';
import {Counter} from "./components/counter/counter/Counter";
import {SettingCounter} from "./components/counter/settingCounter/SettingCounter";

function App() {

  const [startCountValue, setStartCountValue] = useState<number>(0);
  const [maxCountValue, setMaxCountValue] = useState<number>(5)

  useEffect(() => {
    let newValue = localStorage.getItem('counterValue')
    if (newValue) {
      let newCount = JSON.parse(newValue)
      setStartCountValue(newCount)
    }
  }, [])

  useEffect( () => {
    localStorage.setItem('counterValue', JSON.stringify(startCountValue))
  }, [startCountValue] )


  const increaseCount = () => {
    let newCount = startCountValue + 1
    setStartCountValue(newCount)
  }
  const resetCount = () => {
    setStartCountValue(0)
  }

  const setStartValue = (value: any) => {
    setStartCountValue(value)
  }

  const setMaxValue = (value: any) => {
    setMaxCountValue(value)
  }



  return (
    <div className="App">
      <SettingCounter
          setStartValue={ setStartValue }
          setMaxValue={ setMaxValue }
          startCount={ startCountValue }
          maxCount={ maxCountValue }
      />
      <Counter increaseCount={ increaseCount }
               resetCount={ resetCount }
               startCount={ startCountValue }
               maxCount={ maxCountValue }
      />

    </div>
  );
}

export default App;

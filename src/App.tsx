import React, {useState} from 'react';
import './App.css';
import {Counter} from "./components/counter/counter/Counter";
import {SettingCounter} from "./components/counter/settingCounter/SettingCounter";


function App() {

    let [maxValue, setMaxValue] = useState(5)
    let [startValue, setStartValue] = useState(0)
    let [counter, setCounter] = useState(startValue)
    let [error, setError] = useState("")

    let [isCount, setIsCount] = useState(false)
    let disableInc = !isCount || counter === maxValue
    let disableReset = !isCount || counter === startValue
    let disableSet = isCount || !!error
    let counterTop = counter === maxValue

    function increaseCount() {
        counter += 1
        setCounter(counter)
    }
    function resetCount() {
        setCounter(startValue)
    }
    function setSetting() {
        setIsCount(false)
    }
    function setCount() {
        setIsCount(true)
    }
    function changeMaxValue(value: number) {
        if (value < 0 || value <= startValue) {
            setError("Incorrect value")
            setMaxValue(value)
        } else {
            setMaxValue(value)
            setError("")
        }
    }
    function changeStartValue(value: number) {
        if (value < 0 || value >= maxValue) {
            setError("Incorrect value")
            setStartValue(value)
        } else {
            setStartValue(value)
            setCounter(value)
            setError("")
        }
    }

    return (
        <div className="App">
            <SettingCounter
                countValue={ counter }
                setSetting={setSetting}
                setCount={setCount}
                changeMaxValue={ changeMaxValue }
                changeStartValue={ changeStartValue }
                maxValue={maxValue}
                startValue={startValue}
                isCount={isCount}
                error={ error }
                disableSet={ disableSet }
            />
            <Counter
                counterTop={ counterTop }
                disableInc={ disableInc }
                disableReset={ disableReset }
                error={ error }
                isCount={isCount}
                increaseCount={increaseCount}
                resetCount={resetCount}
                countValue={ counter }
            />

        </div>
    );
}

export default App;

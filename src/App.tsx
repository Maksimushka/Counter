import React, {useEffect, useState} from 'react';
import './App.css';
import {Counter} from "./components/counter/counter/Counter";
import {SettingCounter} from "./components/counter/settingCounter/SettingCounter";

function App() {

    let [maxValue, setMaxValue] = useState(5)
    let [startValue, setStartValue] = useState(0)
    let [counter, setCounter] = useState(startValue)
    let [error, setError] = useState("")
    let [isCount, setIsCount] = useState(false)

    useEffect(() => {
        let valueAsString = localStorage.getItem('values')
        if (valueAsString) {
            let a = JSON.parse(valueAsString)
            setStartValue(a.startValue)
            setCounter(a.startValue)
            setMaxValue(a.maxValue)
        }
    }, [])

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
        setToLocalStorage()
    }
    function setToLocalStorage() {
        let values = {
            startValue,
            maxValue
        }
        localStorage.setItem('values', JSON.stringify(values))
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
                setSetting={setSetting}
                setCount={setCount}
                changeMaxValue={changeMaxValue}
                changeStartValue={changeStartValue}
                maxValue={maxValue}
                startValue={startValue}
                isCount={isCount}
                error={error}
            />
            <Counter
                maxValue={ maxValue }
                error={error}
                isCount={isCount}
                increaseCount={increaseCount}
                resetCount={resetCount}
                counter={counter}
                startValue={startValue}
            />

        </div>
    );
}

export default App;

import React from 'react';
import './App.css';
import CounterContainer from './components/counter/CounterContainer';
import SettingCounterContainer from './components/settingCounter/SettingCounterContainer';

function App() {
    //
    // // useEffect(() => {
    // //     let valueAsString = localStorage.getItem('values')
    // //     if (valueAsString) {
    // //         let a = JSON.parse(valueAsString)
    // //         setStartValue(a.startValue)
    // //         setCounter(a.startValue)
    // //         setMaxValue(a.maxValue)
    // //     }
    // // }, [])
    //
    //
    // // function setToLocalStorage() {
    // //     let values = {
    // //         startValue,
    // //         maxValue
    // //     }
    // //     localStorage.setItem('values', JSON.stringify(values))
    // // }

    return (
        <div className="App">
            <SettingCounterContainer />
            <CounterContainer />
        </div>
    );
}

export default App;

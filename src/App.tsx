import React from 'react';
import './App.css';
import {useDispatch, useSelector} from 'react-redux';
import {RootStateReduxType} from './redux/store';
import {Dispatch} from 'redux';
import {actionTypes} from './redux/countReducer';
import {SettingCounter} from './components/settingCounter/SettingCounter';
import {Counter} from './components/counter/Counter';
import {
    deleteErrorAC,
    increaseCountValueAC,
    resetCountValueAC,
    setErrorAC,
    setIsCountAC,
    setMaxValueAC, setStartValueAC
} from './redux/action';
type selectorType = {
    startValue: number
    maxValue: number
    error: string
    isCount: boolean
    counterValue: number
}

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
// // function setToLocalStorage() {
// //     let values = {
// //         startValue,
// //         maxValue
// //     }
// //     localStorage.setItem('values', JSON.stringify(values))
// // }

function App() {

    const {
        error,
        isCount,
        counterValue,
        startValue,
        maxValue
    }  = useSelector<RootStateReduxType, selectorType>((state) => state )

    const dispatch = useDispatch<Dispatch<actionTypes>>()

    const setSetting = () => dispatch(setIsCountAC(false))
    const setCount = () => dispatch(setIsCountAC(true))
    const increaseCount = () => dispatch(increaseCountValueAC())
    const resetCount = () => dispatch(resetCountValueAC())

    const changeMaxValue = (value: number) => {
        if (value < 0 || value <= startValue) {
            dispatch(setErrorAC())
            dispatch(setMaxValueAC(value))
        } else {
            dispatch(setMaxValueAC(value))
            dispatch(deleteErrorAC())
        }
    }
    const changeStartValue = (value: number) => {
        if (value < 0 || value >= maxValue) {
            dispatch(setErrorAC())
            dispatch(setStartValueAC(value))
        } else {
            dispatch(setStartValueAC(value))
            dispatch(deleteErrorAC())
        }
    }

    return (
        <div className="App">
            <SettingCounter
                isCount={isCount} setCount={setCount} setSetting={setSetting}
                maxValue={maxValue} startValue={startValue} changeMaxValue={changeMaxValue}
                changeStartValue={changeStartValue} error={error} />;
            <Counter
                isCount={isCount} error={error} maxValue={maxValue}
                startValue={startValue} counter={counterValue}
                increaseCount={increaseCount} resetCount={resetCount} />

        </div>
    );
}

export default App;

import React, {useCallback} from 'react';
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
    setMaxValueAC, setStartValueAC,
} from './redux/action';

type selectorType = {
    startValue: number
    maxValue: number
    error: string
    isCount: boolean
    counterValue: number
}

function App() {
    const {
        error,
        isCount,
        counterValue,
        startValue,
        maxValue
    } = useSelector<RootStateReduxType, selectorType>((state) => state)
    const dispatch = useDispatch<Dispatch<actionTypes>>()

    const setSetting = useCallback(() => dispatch(setIsCountAC(false)), [dispatch])
    const setCount = useCallback(() => {
        dispatch(setIsCountAC(true))
    }, [dispatch])
    const increaseCount = useCallback(() => dispatch(increaseCountValueAC()), [dispatch])
    const resetCount = useCallback(() => dispatch(resetCountValueAC()), [dispatch])

    const changeMaxValue = useCallback((value: number) => {
        if (value < 0 || value <= startValue) {
            dispatch(setErrorAC())
            dispatch(setMaxValueAC(value))
        } else {
            dispatch(setMaxValueAC(value))
            dispatch(deleteErrorAC())
        }
    }, [dispatch, startValue])
    const changeStartValue = useCallback((value: number) => {
        if (value < 0 || value >= maxValue) {
            dispatch(setErrorAC())
            dispatch(setStartValueAC(value))
        } else {
            dispatch(setStartValueAC(value))
            dispatch(deleteErrorAC())
        }
    }, [dispatch, maxValue])

    return (
        <div className="App">
            <SettingCounter
                isCount={isCount} setCount={setCount} setSetting={setSetting}
                maxValue={maxValue} startValue={startValue} changeMaxValue={changeMaxValue}
                changeStartValue={changeStartValue} error={error}/>
            <Counter
                isCount={isCount} error={error} maxValue={maxValue}
                startValue={startValue} counter={counterValue}
                increaseCount={increaseCount} resetCount={resetCount}/>
        </div>
    );
}

export default App;

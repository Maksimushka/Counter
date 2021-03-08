import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {SettingCounter} from './SettingCounter';
import {
    actionTypes,
    deleteErrorAC,
    setErrorAC,
    setIsCountAC,
    setMaxValueAC,
    setStartValueAC
} from '../../redux/countReducer';
import {selectState} from '../../redux/selectors';
import {Dispatch} from 'redux';

const SettingCounterContainer = () => {

    const {
        maxValue,
        error,
        isCount,
        startValue
    } = useSelector(selectState)

    const dispatch = useDispatch<Dispatch<actionTypes>>()

    const setSetting = () => {
        dispatch(setIsCountAC(false))
    }
    const setCount = () => {
        dispatch(setIsCountAC(true))
    }
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
        <div>
            <SettingCounter
                isCount={isCount} setCount={setCount}
                setSetting={setSetting} maxValue={maxValue}
                startValue={startValue} changeMaxValue={changeMaxValue}
                changeStartValue={changeStartValue} error={error}/>
        </div>
    );
};

export default SettingCounterContainer
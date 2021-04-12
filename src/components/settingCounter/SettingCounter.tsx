import React, {useCallback, useState} from 'react';
import s from './SettingCounter.module.css';
import {Button} from "../button/Button";
import {SettingDisplay} from "./settingDisplay/SettingDisplay";
import {deleteErrorAC, setErrorAC, setIsCountAC, setMaxValueAC, setStartValueAC} from '../../redux/action';
import {useDispatch, useSelector} from 'react-redux';
import {Dispatch} from 'redux';
import {actionTypes} from '../../redux/countReducer';
import {RootStateReduxType} from '../../redux/store';
import {SelectorType} from '../../App';

export const SettingCounter = () => {
    const {
        startValue, maxValue, isCount, error
    } = useSelector<RootStateReduxType, SelectorType>((state) => state)
    const dispatch = useDispatch<Dispatch<actionTypes>>()

    let disableSet = isCount || !!error

    const setSetting = useCallback(() => dispatch(setIsCountAC(false)), [dispatch])
    const setCount = useCallback(() => dispatch(setIsCountAC(true)), [dispatch])
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
        <div className={ s.SetCounter }>
            <SettingDisplay
                setSetting={ setSetting }
                changeMaxValue={ changeMaxValue }
                changeStartValue={ changeStartValue }
                maxValue={ maxValue }
                startValue={ startValue }
                error={ error }
            />
            <div className={s.buttons}>
                <Button onChangeCount={ setCount }
                        disable={ disableSet } >set</Button>
            </div>
        </div>
    );
}
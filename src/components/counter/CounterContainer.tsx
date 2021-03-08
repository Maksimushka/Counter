import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {Counter} from './Counter';
import {RootStateReduxType} from '../../redux/store';
import {actionTypes, increaseCountValueAC, resetCountValueAC} from '../../redux/countReducer';
import {selectState} from '../../redux/selectors';
import {Dispatch} from 'redux';

type selectorType = {
    startValue: number
    maxValue: number
    error: string
    isCount: boolean
    counterValue: number
}

const CounterContainer: React.FC = () => {

    const {
        error,
        isCount,
        counterValue,
        startValue,
        maxValue
    } = useSelector<RootStateReduxType, selectorType>(selectState)

    const dispatch = useDispatch<Dispatch<actionTypes>>()

    const increaseCount = () => {
        dispatch(increaseCountValueAC())
    }
    const resetCount = () => {
        dispatch(resetCountValueAC())
    }

    return (
        <div>
            <Counter counter={counterValue} increaseCount={increaseCount}
                     resetCount={resetCount} isCount={isCount}
                     error={error} maxValue={maxValue}
                     startValue={startValue}/>
        </div>
    );
};

export default CounterContainer
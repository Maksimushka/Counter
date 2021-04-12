import React, {useCallback} from 'react';
import s from './Counter.module.css';
import {Display} from "./display/Display";
import {Button} from "../button/Button";
import {increaseCountValueAC, resetCountValueAC} from '../../redux/action';
import {useDispatch, useSelector} from 'react-redux';
import {Dispatch} from 'redux';
import {actionTypes} from '../../redux/countReducer';
import {RootStateReduxType} from '../../redux/store';
import {SelectorType} from '../../App';

export const Counter: React.FC = () => {
    const {
        isCount, error,
        maxValue, counterValue,
        startValue
    } = useSelector<RootStateReduxType, SelectorType>((state) => state)
    const dispatch = useDispatch<Dispatch<actionTypes>>()

    const increaseCount = useCallback(() => dispatch(increaseCountValueAC()), [dispatch])
    const resetCount = useCallback(() => dispatch(resetCountValueAC()), [dispatch])

    let disableInc = !isCount || counterValue === maxValue
    let disableReset = !isCount || counterValue === startValue
    let counterTop = counterValue === maxValue

    return (
        <div className={ s.counter }>
            <Display
                counterTop={counterTop}
                error={error}
                countValue={isCount ? counterValue: 'PRESS BUTTON SET'}
            />
            <div className={s.buttons}>
                <Button onChangeCount={ increaseCount }
                        disable={ disableInc }>inc</Button>
                <Button onChangeCount={ resetCount }
                        disable={ disableReset }>reset</Button>
            </div>
        </div>
    );
}
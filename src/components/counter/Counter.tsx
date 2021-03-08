import React from 'react';
import s from './Counter.module.css';
import {Display} from "./display/Display";
import {Button} from "../button/Button";

export type CounterPropsType = {
    counter: number | string
    increaseCount: () => void
    resetCount: () => void
    isCount: boolean
    error: string
    maxValue: number
    startValue: number
}

export const Counter: React.FC<CounterPropsType> = (props) => {

    const {
        isCount, error,
        resetCount, increaseCount,
        counter, maxValue,
        startValue} = props

    let disableInc = !isCount || counter === maxValue
    let disableReset = !isCount || counter === startValue
    let counterTop = counter === maxValue

    return (
        <div className={ s.counter }>
            <Display
                counterTop={counterTop}
                error={error}
                countValue={isCount ? counter: 'PRESS BUTTON SET'}
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
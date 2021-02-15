import React from 'react';
import s from './Counter.module.css';
import {Display} from "../display/Display";
import {Button} from "../button/Button";

type CounterPropsType = {
    countValue: number | string
    increaseCount: () => void
    resetCount: () => void
    isCount: boolean
    error: string
    disableInc: boolean
    disableReset: boolean
    counterTop: boolean
}

export function Counter(props: CounterPropsType) {
    return (
        <div className={ s.counter }>
            <Display
                counterTop={props.counterTop}
                error={props.error}
                countValue={props.isCount ? props.countValue: 'PRESS BUTTON SET'}
            />
            <div className={s.buttons}>
                <Button onChangeCount={ props.increaseCount }
                        disable={ props.disableInc }>inc</Button>
                <Button onChangeCount={ props.resetCount }
                        disable={ props.disableReset }>reset</Button>
            </div>
        </div>
    );
}
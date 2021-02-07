import React from 'react';
import s from './Counter.module.css';
import {Display} from "../display/Display";
import {Button} from "../button/Button";

type CounterPropsType = {
    startCount: number
    maxCount: number
    increaseCount: () => void
    resetCount: () => void
}

export function Counter(props: CounterPropsType) {
    return (
        <div className={ s.counter }>
            <Display
                maxCount={ props.maxCount }
                count={ props.startCount }
            />
            <div className={s.buttons}>
                <Button onChangeCount={ props.increaseCount }
                        maxCount={ props.maxCount }
                        startCount={ props.startCount }>inc</Button>
                <Button onChangeCount={ props.resetCount }
                        maxCount={ props.maxCount }
                        startCount={ props.startCount }>reset</Button>
            </div>
        </div>
    );
}
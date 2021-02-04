import React from 'react';
import s from './Counter.module.css';
import {Display} from "./display/Display";
import {Buttons} from "./buttons/Buttons";

type CounterPropsType = {
    count: number
    increaseCount: () => void
    resetCount: () => void
}

export function Counter(props: CounterPropsType) {
    return (
        <div className={ s.counter }>
            <Display count={ props.count } />
            <Buttons increaseCount={ props.increaseCount }
                     resetCount={ props.resetCount }
                     count={ props.count } />
        </div>
    );
}
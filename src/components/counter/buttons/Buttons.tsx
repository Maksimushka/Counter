import React from 'react';
import s from './Buttons.module.css';

type ButtonsPropsType = {
    count: number
    increaseCount: () => void
    resetCount: () => void
}

export function Buttons(props: ButtonsPropsType) {
    const increaseHandler = () => {
        props.increaseCount()
    }
    const resetHandler = () => {
        props.resetCount()
    }

    return (
        <div className={ s.buttons }>
            <button
                disabled={ props.count === 5 }
                onClick={ increaseHandler }
                className={ s.button }>inc</button>
            <button
                disabled={ props.count === 0 }
                onClick={ resetHandler }
                className={ s.button }>reset</button>
        </div>
    );
}

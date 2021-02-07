import React from 'react';
import s from './Button.module.css';

type ButtonPropsType = {
    startCount: number
    onChangeCount: () => void
    children: string
    maxCount: number
}

export function Button(props: ButtonPropsType) {
    const onChangeCount = () => {
        props.onChangeCount()
    }

    return (
        <div className={ s.buttons }>
            <button
                disabled={ props.children === "inc" ? props.startCount === props.maxCount : props.startCount === 0 }
                onClick={ onChangeCount }
                className={ s.button }>{props.children}</button>
        </div>
    );
}

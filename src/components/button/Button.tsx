import React from 'react';
import s from './Button.module.css';

type ButtonPropsType = {
    onChangeCount: () => void
    children: string
    disable: boolean
}

export function Button(props: ButtonPropsType) {
    const onChangeCount = () => {
        props.onChangeCount()
    }

    return (
        <div className={ s.buttons }>
            <button
                disabled={ props.disable }
                onClick={ onChangeCount }
                className={ s.button }>{props.children}</button>
        </div>
    );
}

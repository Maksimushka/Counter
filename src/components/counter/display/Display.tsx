import React from 'react';
import s from './Display.module.css';

type DisplayPropsType = {
    count: number
}

export function Display(props: DisplayPropsType) {
    return (
        <div className={ s.display }>
            <span className={  props.count === 5 ? s.fullCount : s.count}>{ props.count }</span>
        </div>
    );
}


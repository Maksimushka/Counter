import React from 'react';
import s from './Display.module.css';

type DisplayPropsType = {
    count: number
    maxCount: number
}

export function Display(props: DisplayPropsType) {
    return (
        <div className={ s.display }>
            <span className={  props.count === props.maxCount ? s.full : ""}>{ props.count }</span>
        </div>
    );
}


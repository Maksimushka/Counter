import React from 'react';
import s from './Display.module.css';

type DisplayPropsType = {
    countValue: number | string
    error: string
    counterTop: boolean
}

export function Display(props: DisplayPropsType) {
    let displayClass = `${s.display} ${props.error ? s.displayError : ""}`
    let countClass = `${s.SPAN} ${props.counterTop ? s.full : ""}`

    return (
        <div className={ displayClass }>
            { props.error ? <span className={s.SPAN}>{props.error}</span> : <span className={ countClass }>{ props.countValue }</span> }
        </div>
    );
}


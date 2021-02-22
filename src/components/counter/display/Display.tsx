import React from 'react';
import s from './Display.module.css';

type DisplayPropsType = {
    countValue: number | string
    error: string
    counterTop: boolean
}

export function Display({counterTop, error, countValue}: DisplayPropsType) {

    let displayClass = `${s.display} ${error ? s.displayError : ""}`
    let countClass = `${s.SPAN} ${counterTop ? s.full : ""}`

    return (
        <div className={displayClass}>
            {
                error
                    ? <span className={s.SPAN}>{error}</span>
                    : <span className={countClass}>{countValue}</span>
            }
        </div>
    );
}


import React, {ChangeEvent} from 'react';
import s from './SettingDisplay.module.css';

type SettingDisplayPropsType = {
    countValue: number | string
    setSetting: () => void
    changeMaxValue: (value: number) => void
    changeStartValue: (value: number) => void
    maxValue: number
    startValue: number
    error: string
}

export function saveValue(key: string, state: number)  {
    let newValue = JSON.stringify(state);
    localStorage.setItem(key, newValue)
}
export function restoreValue(key: string, state: number) {
    let valueAsString = localStorage.getItem(key)
    if (valueAsString) state = JSON.parse(valueAsString)
    return state
}

export function SettingDisplay(props: SettingDisplayPropsType) {
    function onChangeMaxHandler(e: ChangeEvent<HTMLInputElement>) {
        let newMaxValue = JSON.parse(e.currentTarget.value)
        props.changeMaxValue(newMaxValue)
    }

    function onChangeStartHandler(e: ChangeEvent<HTMLInputElement>) {
        let newStartValue = JSON.parse(e.currentTarget.value)
        props.changeStartValue(newStartValue)
    }

    function setSetting() {
        props.setSetting()
    }


    return (
        <div className={ s.display }>
            <div className={ s.max }>
                <span>max value:</span>
                <input
                    className={ props.error && s.error}
                    type="number"
                    onFocus={ setSetting }
                    value={ props.maxValue }
                    onChange={ onChangeMaxHandler }
                />
            </div>
            <div className={ s.start }>
                <span>start value:</span>
                <input
                    className={ props.error && s.error}
                    onFocus={ setSetting }
                    value={ props.startValue }
                    type="number"
                    onChange={ onChangeStartHandler }
                />
            </div>

        </div>
    );
}


import React, {ChangeEvent} from 'react';
import s from './SettingDisplay.module.css';

type SettingDisplayPropsType = {
    setSetting: () => void
    changeMaxValue: (value: number) => void
    changeStartValue: (value: number) => void
    maxValue: number
    startValue: number
    error: string
}

export function SettingDisplay(
    {setSetting, changeMaxValue, changeStartValue, error, maxValue, startValue }: SettingDisplayPropsType)
{

    function onChangeMaxHandler(e: ChangeEvent<HTMLInputElement>) {
        let newMaxValue = e.currentTarget.valueAsNumber
        changeMaxValue(newMaxValue)
    }

    function onChangeStartHandler(e: ChangeEvent<HTMLInputElement>) {
        let newStartValue = JSON.parse(e.currentTarget.value)
        changeStartValue(newStartValue)
    }

    function onSetSetting() {
        setSetting()
    }


    return (
        <div className={ s.display }>
            <div className={ s.max }>
                <span>max value:</span>
                <input
                    className={ error && s.error}
                    type="number"
                    onFocus={ onSetSetting }
                    value={ maxValue }
                    onChange={ onChangeMaxHandler }
                />
            </div>
            <div className={ s.start }>
                <span>start value:</span>
                <input
                    className={ error && s.error}
                    onFocus={ setSetting }
                    value={ startValue }
                    type="number"
                    onChange={ onChangeStartHandler }
                />
            </div>

        </div>
    );
}


import React from 'react';
import s from './SettingCounter.module.css';
import {Button} from "../button/Button";
import {SettingDisplay} from "../settingDisplay/SettingDisplay";

type SettingCounterPropsType = {
    isCount: boolean
    setCount: () => void
    setSetting: () => void
    maxValue: number
    startValue: number
    changeMaxValue: (value: number) => void
    changeStartValue: (value: number) => void
    error: string
}

export function SettingCounter(props: SettingCounterPropsType) {
    let disableSet = props.isCount || !!props.error

    return (
        <div className={ s.SetCounter }>
            <SettingDisplay
                setSetting={ props.setSetting }
                changeMaxValue={ props.changeMaxValue }
                changeStartValue={ props.changeStartValue }
                maxValue={ props.maxValue }
                startValue={ props.startValue }
                error={ props.error }
            />
            <div className={s.buttons}>
                <Button
                    onChangeCount={ props.setCount }
                    disable={ disableSet }
                        >set</Button>
            </div>
        </div>
    );
}
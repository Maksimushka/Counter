import React from 'react';
import s from './SettingCounter.module.css';
import {Button} from "../button/Button";
import {SettingDisplay} from "./settingDisplay/SettingDisplay";

export type SettingCounterPropsType = {
    isCount: boolean
    setCount: () => void
    setSetting: () => void
    maxValue: number
    startValue: number
    changeMaxValue: (value: number) => void
    changeStartValue: (value: number) => void
    error: string
}

export const SettingCounter = React.memo((props: SettingCounterPropsType) => {
    let disableSet = props.isCount || !!props.error

    console.log('SettingCounter render')

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
})
import React from 'react';
import s from './SettingCounter.module.css';
import {Button} from "../button/Button";
import {SettingDisplay} from "../settingDisplay/SettingDisplay";

type SettingCounterPropsType = {
    isCount: boolean
    countValue: number | string
    setCount: () => void
    setSetting: () => void
    maxValue: number
    startValue: number
    changeMaxValue: (value: number) => void
    changeStartValue: (value: number) => void
    error: string
    disableSet: boolean
}

export function SettingCounter(props: SettingCounterPropsType) {


    return (
        <div className={ s.SetCounter }>
            <SettingDisplay
                countValue={ props.countValue }
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
                    disable={ props.disableSet }
                        >set</Button>
            </div>
        </div>
    );
}
import React, {useState} from 'react';
import s from './SettingCounter.module.css';
import {Button} from "../button/Button";
import {SettingDisplay} from "../settingDisplay/SettingDisplay";

type SettingCounterPropsType = {
    setStartValue: (value: any) => void
    setMaxValue: (value: any) => void
    startCount: number
    maxCount: number
}

export function SettingCounter(props: SettingCounterPropsType) {

    let [minCount, setMinCount] = useState(props.startCount)
    let [maxCount, setMaxCount] = useState(props.maxCount)

    let setCount = () => {
        props.setStartValue(minCount)
        props.setMaxValue(maxCount)
    }

    let setMinCount1 = (value: any) => {
        setMinCount(value)
    }
    let setMaxCount1 = (value: any) => {
        setMaxCount(value)
    }

    return (
        <div className={ s.SetCounter }>
            <SettingDisplay
                setMinCount={ setMinCount1 }
                setMaxCount={ setMaxCount1 }
                startCount={ minCount }
                maxCount={ maxCount }
            />
            <div className={s.buttons}>
                <Button onChangeCount={ setCount }
                        maxCount={ props.maxCount }
                        startCount={ props.startCount }>set</Button>
            </div>
        </div>
    );
}
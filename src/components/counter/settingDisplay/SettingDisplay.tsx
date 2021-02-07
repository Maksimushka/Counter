import React from 'react';
import s from './SettingDisplay.module.css';

type SettingDisplayPropsType = {
    setMinCount: (value: any) => void
    setMaxCount: (value: any) => void
    startCount: number
    maxCount: number
}

export function SettingDisplay(props: SettingDisplayPropsType) {


    return (
        <div className={ s.display }>
            <div className={ s.max }>
                <span>max value:</span>
                <input
                    type="number"
                    value={props.maxCount}
                    onChange={ (e) => { props.setMaxCount(e.currentTarget.value) } }
                />
            </div>
            <div className={ s.start }>
                <span>start value:</span>
                <input
                    type="number"
                    value={props.startCount}
                    onChange={ (e) => { props.setMinCount(e.currentTarget.value) } }
                />
            </div>

        </div>
    );
}


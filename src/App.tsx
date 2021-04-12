import React from 'react';
import './App.css';
import {SettingCounter} from './components/settingCounter/SettingCounter';
import {Counter} from './components/counter/Counter';

export type SelectorType = {
    startValue: number
    maxValue: number
    error: string
    isCount: boolean
    counterValue: number
}

function App() {

    return (
        <div className="App">
            <SettingCounter />
            <Counter />
        </div>
    );
}

export default App;

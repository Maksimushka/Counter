import {createStore} from 'redux';
import counterReducer from './countReducer';
import {loadState, saveState} from '../utils/localStorage';

const store = createStore(counterReducer, loadState())

store.subscribe(() => {
    saveState({
        startValue: store.getState().startValue,
        maxValue: store.getState().maxValue,
        counterValue: store.getState().startValue,
        error: store.getState().error
    });
});

export default store

export type RootStateReduxType = ReturnType<typeof counterReducer>
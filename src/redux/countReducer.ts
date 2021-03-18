import {
    deleteErrorACType,
    increaseCountValueACType,
    resetCountValueACType,
    setErrorACType,
    setIsCountACType,
    setMaxValueACType,
    setStartValueACType, setValueFromLocalStorageACType
} from './action';

export type actionTypes = setStartValueACType | setMaxValueACType
    | setErrorACType | setIsCountACType | resetCountValueACType
    | increaseCountValueACType | deleteErrorACType | setValueFromLocalStorageACType

const initialState = {
    startValue: 0,
    maxValue: 5,
    counterValue: 0,
    error: '',
    isCount: false
}
type InitialStateType = typeof initialState

const counterReducer = (state: InitialStateType = initialState, action: actionTypes): InitialStateType => {
    switch (action.type) {
        case 'SET_START_VALUE': {
            return {
                ...state,
                startValue: action.value,
                counterValue: action.value
            }
        }
        case 'SET_MAX_VALUE': {
            return { ...state, maxValue: action.value }
        }
        case 'INCREASE_COUNT_VALUE': {
            return { ...state, counterValue: state.counterValue += 1 }
        }
        case 'RESET_COUNT_VALUE': {
            return { ...state,  counterValue: state.startValue }
        }
        case 'SET_IS_COUNT': {
            return { ...state, isCount: action.value }
        }
        case 'SET_ERROR': {
            return { ...state, error: "Incorrect value" }
        }
        case 'DELETE_ERROR': {
            return  { ...state,  error: '' }
        }
        case 'SET_VALUE_FROM_LOCAL_STORAGE': {
            return { ...state }
        }
        default: {
            return state
        }
    }
}

export default counterReducer



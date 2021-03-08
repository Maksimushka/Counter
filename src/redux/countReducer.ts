type setStartValueACType = {
    type: 'SET_START_VALUE'
    value: number
}
type setMaxValueACType = {
    type: 'SET_MAX_VALUE'
    value: number
}
type increaseCountValueACType = {
    type: 'INCREASE_COUNT_VALUE'
}
type resetCountValueACType = {
    type: 'RESET_COUNT_VALUE'
}
type setErrorACType = {
    type: 'SET_ERROR'
}
type deleteErrorACType = {
    type: 'DELETE_ERROR'
}
type setIsCountACType = {
    type: 'SET_IS_COUNT'
    value: boolean
}
type setValueFromLocalStorageACType = {
    type: 'SET_VALUE_FROM_LOCAL_STORAGE'
    value: number
}
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
            return {
                ...state
            }
        }
        default: {
            return state
        }
    }
}

export default counterReducer

export const setStartValueAC = (value: number): setStartValueACType => ({ type: 'SET_START_VALUE', value })
export const setMaxValueAC = (value: number): setMaxValueACType => ({ type: 'SET_MAX_VALUE', value })
export const resetCountValueAC = (): resetCountValueACType => ({ type: 'RESET_COUNT_VALUE' })
export const increaseCountValueAC = (): increaseCountValueACType => ({ type: 'INCREASE_COUNT_VALUE' })
export const setErrorAC = (): setErrorACType => ({ type: 'SET_ERROR' })
export const deleteErrorAC = (): deleteErrorACType => ({ type: 'DELETE_ERROR' })
export const setIsCountAC = (value: boolean): setIsCountACType => ({ type: 'SET_IS_COUNT', value })
export const setValueFromLocalStorageAC = (value: number): setValueFromLocalStorageACType => (
    { type: 'SET_VALUE_FROM_LOCAL_STORAGE', value }
    )

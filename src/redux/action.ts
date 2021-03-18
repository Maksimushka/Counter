// TYPES
export type setStartValueACType = {
    type: 'SET_START_VALUE'
    value: number
}
export type setMaxValueACType = {
    type: 'SET_MAX_VALUE'
    value: number
}
export type increaseCountValueACType = {
    type: 'INCREASE_COUNT_VALUE'
}
export type resetCountValueACType = {
    type: 'RESET_COUNT_VALUE'
}
export type setErrorACType = {
    type: 'SET_ERROR'
}
export type deleteErrorACType = {
    type: 'DELETE_ERROR'
}
export type setIsCountACType = {
    type: 'SET_IS_COUNT'
    value: boolean
}
export type setValueFromLocalStorageACType = {
    type: 'SET_VALUE_FROM_LOCAL_STORAGE'
    value: number
}

// ACTIONS
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
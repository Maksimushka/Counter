import counterReducer, {
    CountReducerStateType, deleteErrorAC,
    increaseCountValueAC,
    resetCountValueAC, setErrorAC, setIsCountAC,
    setMaxValueAC,
    setStartValueAC
} from './countReducer';

let startState: CountReducerStateType;

beforeEach(() => {
    startState = {
        startValue: 0,
        maxValue: 5,
        counterValue: 2,
        error: 'asdfasfd',
        isCount: false
    }
})

test('setMaxValue should be work', () => {
    let action = setMaxValueAC(10)
    let endState = counterReducer(startState, action)

    expect(endState.maxValue).toBe(10)
})

test('setStartValue should be work', () => {
    let action = setStartValueAC(5)
    let endState = counterReducer(startState, action)

    expect(endState.startValue).toBe(5)
})

test('increaseValue should be work', () => {
    let action = increaseCountValueAC()
    let endState = counterReducer(startState, action)

    expect(endState.counterValue).toBe(3)
})

test('resetCountValue should be work', () => {
    let action = resetCountValueAC()
    let endState = counterReducer(startState, action)

    expect(endState.counterValue).toBe(0)
})

test('setIsCount should be work', () => {
    let action = setIsCountAC(true)
    let endState = counterReducer(startState, action)

    expect(endState.isCount).toBe(true)
})

test('deleteError should be work', () => {
    let action = setErrorAC()
    let endState = counterReducer(startState, action)

    expect(endState.error).toBe("Incorrect value")
})

test('setError should be work', () => {
    let action = deleteErrorAC()
    let endState = counterReducer(startState, action)

    expect(endState.error).toBe('')
})


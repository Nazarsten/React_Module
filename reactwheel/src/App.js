import {useReducer} from "react";

const reducer = (state, action) => {
    switch (action.type) {
        case 'increment':
            return {...state, count1: state.count1 + 1}
        case 'decrement':
            return {...state, count1: state.count1 - 1}
        case 'reset':
            return {...state, count1: state.count1 = 0}

        case 'increment2':
            return {...state, count2: state.count2 + 1}
        case 'decrement2':
            return {...state, count2: state.count2 - 1}
        case 'reset2':
            return {...state, count2: state.count2 = 0}

        case 'increment3':
            return {...state, count3: state.count3 + 1}
        case 'decrement3':
            return {...state, count3: state.count3 - 1}
        case 'reset3':
            return {...state, count3: state.count3 = 0}
    }
}

function App() {
    const [state, dispatch] = useReducer(reducer, {count1: 0, count2: 0, count3: 0});
    return (
        <div>
            <div>{state.count1}</div>
            <button onClick={() => {
                dispatch({type: 'increment'})
            }}>increment
            </button>
            <button onClick={() => {
                dispatch({type: 'decrement'})
            }}>decrement
            </button>
            <button onClick={() => {
                dispatch({type: 'reset'})
            }}>recet
            </button>

            <div>{state.count2}</div>
            <button onClick={() => {
                dispatch({type: 'increment2'})
            }}>increment
            </button>
            <button onClick={() => {
                dispatch({type: 'decrement2'})
            }}>decrement
            </button>
            <button onClick={() => {
                dispatch({type: 'reset2'})
            }}>recet
            </button>

            <div>{state.count3}</div>
            <button onClick={() => {
                dispatch({type: 'increment3'})
            }}>increment
            </button>
            <button onClick={() => {
                dispatch({type: 'decrement3'})
            }}>decrement
            </button>
            <button onClick={() => {
                dispatch({type: 'reset3'})
            }}>recet
            </button>
        </div>
    );
}

export default App;

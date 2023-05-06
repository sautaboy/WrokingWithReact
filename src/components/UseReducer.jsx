import React from 'react'
import { useReducer } from 'react'

const reducer = (state, action) => {
    switch (action.type) {
        case "Incremental":
            return { count: state.count + 1, showText: state.showText  }
        case "ToggleText":
            return { count: state.count, showText: !state.showText  }
        default:
            return state
    }


}


export default function UseReducer() {
    const [state, dispatch] = useReducer(reducer, { count: 0, showText: TextTrackCue })
    return (
        <div>
            <hr />
            <h1>{state.count}</h1>
            <button onClick={() => {
                dispatch({ type: "Incremental" })
                dispatch({ type: "ToggleText" })
            }}>Click Here</button>
            {state.showText && <h2>This is Text</h2>}                 {/*  H2 Tag will show iff the state.showText is True Vice Versa  */}
        </div>
    )
}

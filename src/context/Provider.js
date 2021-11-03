import React, { useContext, createContext, useReducer } from 'react'
import interestedState from './initialStates/interestedState'
import mustWatchState from './initialStates/mustWatchState'
import watchedState from './initialStates/watchedState'
import interestedReducer from './reducers/interestedReducer'
import mustWatchReducer from './reducers/mustWatchReducer'
import watchedReducer from './reducers/watchedReducer'

const GlobalContext = createContext({})

export function GlobalProvider({ children }) {
  const [mustWatch, mustWatchDispatch] = useReducer(mustWatchReducer, mustWatchState)
  const [interested, interestedDispatch] = useReducer(interestedReducer, interestedState)
  const [watched, watchedDispatch] = useReducer(watchedReducer, watchedState)

  return (
    <GlobalContext.Provider value={{
      mustWatchContext: { mustWatch, mustWatchDispatch },
      interestedContext: { interested, interestedDispatch },
      watchedContext: { watched, watchedDispatch }
    }}>
        {children}
    </GlobalContext.Provider>
  )
}

export const useStore = () => useContext(GlobalContext)
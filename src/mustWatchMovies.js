import React, { useContext, useState } from 'react'

const mustWatchContext = React.createContext()
const mustWatchUpdateContext = React.createContext()

export function useMustWatch() {
  return useContext(mustWatchContext)
}

export function useMustWatchUpdateContext() {
  return useContext(mustWatchUpdateContext)
}

export function mustWatchProvider({ children }) {
  const [mustWatch, setMustWatch] = useState(false)

  function toggleMustWatch() {
    setMustWatch(prevMustWatch => !prevMustWatch)
  }

  return (
    <mustWatchContext.Provider value={mustWatch}>
      <mustWatchUpdateContext.Provider value={toggleTheme}>
        {children}
      </mustWatchUpdateContext.Provider>
    </mustWatchContext.Provider>
  )
}
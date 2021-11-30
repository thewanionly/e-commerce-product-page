import { useState, useEffect } from 'react'

const useLocalStorage = (key, initialValue) => {
  const [state, setState] = useState(initialValue)

  const handleUpdateState = newState => {
    let newValue = newState

    // Check if newState is a function
    if (typeof newState === 'function') {
      newValue = newState(state)
    }

    //Set state with new value
    setState(newValue)

    //Store new value to localStorage
    localStorage.setItem(key, JSON.stringify(newValue))
  }

  useEffect(() => {
    //Get data from localStorage
    const localStorageData = localStorage.getItem(key)

    // If there's data from localStorage, set the state with it
    if (localStorageData) {
      setState(JSON.parse(localStorageData))
    }
  }, [])

  return [state, handleUpdateState]
}

export { useLocalStorage }

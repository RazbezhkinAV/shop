export function loadState<T> (key: string): T | undefined {
  try {
    const jsonState = window.localStorage.getItem(key)
    if (jsonState == null) {
      return undefined
    }
    return JSON.parse(jsonState)
  } catch (err) {
    console.error(err)
    return undefined
  }
}

export function saveState<T> (key: string, state: T) {
  const jsonState = JSON.stringify(state)
  window.localStorage.setItem(key, jsonState)
}

import { useState, useEffect } from 'react';

export function usePersistedState<S>(key: string, initialState: S) {
  const [state, setState] = useState(() => {
    const storageValue = localStorage.getItem(key);

    if (storageValue) {
      return JSON.parse(storageValue);
    } else {
      return initialState;
    }
  });

  useEffect(() => {
    const stateJSON = JSON.stringify(state);
    localStorage.setItem(key, stateJSON);
  }, [state]);

  return [state, setState];
}

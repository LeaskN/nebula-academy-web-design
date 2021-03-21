import { useState, useEffect } from 'react';

export const usePersistedState = (key, defaultValue) => {
    const [state, setState] = useState(
        () => JSON.parse(window.localStorage.getItem(key)) || defaultValue
    );
    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(state));
    }, [key, state]);
    return [state, setState];
}
export const addToLocalStorage = (key, value) => {
    localStorage.setItem(key, JSON.stringify(value))
    window.dispatchEvent(new Event('storage'))
}


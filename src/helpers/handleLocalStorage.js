export const addToLocalStorage = value => {
  if (localStorage.getItem('tasks')) {
    const newTasks = JSON.parse(localStorage.getItem('tasks'))
    newTasks.push(value)
    localStorage.setItem('tasks', JSON.stringify(newTasks))
  } else {
    localStorage.setItem('tasks', JSON.stringify([value]))
  }
  window.dispatchEvent(new Event('storage'))
}

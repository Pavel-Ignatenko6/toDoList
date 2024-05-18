import { useState, useEffect } from 'react'
import './styleDisplayTask.css'
import { Sorting } from './Sorting'

export function TaskDisplay() {
  const [tasks, setTasks] = useState([])
  // useState for a filter checkbox
  const [isChecked, setIsChecked] = useState(true)
  const [isCompleted, setIsCompleted] = useState(true) // - УДАЛИТЬ

  useEffect(() => {
    const getStorageData = () => {
      if (localStorage.getItem('tasks')) {
        const tasksArray = JSON.parse(localStorage.getItem('tasks'))
        setTasks(tasksArray)
      } else {
        const tasksArray = []
        setTasks(tasksArray)
      }
    }
    getStorageData()

    window.addEventListener('storage', getStorageData)

    return () => window.removeEventListener('storage', getStorageData)
  }, [])

  const markAsCompleted = e => {
    const task = e.target.parentElement.parentElement
    if (e.target.checked == true) {
      task.classList.add('completed')
      setIsCompleted(true)
    } else {
      task.classList.remove('completed')
      setIsCompleted(false)
    }
  }

  const hideCompleted = e => {
    const bool = true
    if (e.target.checked == false) {
      setIsChecked(bool)
    } else {
      setIsChecked(!bool)
    }
  }

  return (
    <div className="display-task-container container">
      <h2>My tasks</h2>
      <label className="single-checkbox" htmlFor="filter">
        <span className="checkbox-wrapper">Show only unfulfilled</span>
        <input type="checkbox" name="filter" className="input filter-input" onChange={hideCompleted} />
        <span className="checkmark"></span>
      </label>
      <input type="text" placeholder="Search" className="search-bar" />

      <div className="display">
        <Sorting />
        <div className="tasks">
          {tasks.map(([taskNameValue, taskDescValue, taskDate]) => {
            return (
              // add tasks
              isChecked &&
              <div key={taskNameValue + taskDescValue + taskDate} className="single-task">
                <label className="single-checkbox" htmlFor="status">
                  <input type="checkbox" name="status" className="input task-input" onChange={markAsCompleted} />
                  <span className="checkmark"></span>
                </label>
                <h3 className="task-name">{taskNameValue}</h3>
                <h3 className="task-description">{taskDescValue}</h3>
                <h3 className="task-date">{taskDate}</h3>
                <i className="fa-solid fa-xmark delete-task-icon"></i>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

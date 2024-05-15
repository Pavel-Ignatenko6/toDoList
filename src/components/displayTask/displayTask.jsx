import { useState, useEffect } from 'react'
import './styleDisplayTask.css'
import { Sorting } from './Sorting'

export function DisplayTask() {
  const [tasks, setTasks] = useState([])

  useEffect(() => {
    const getStorageData = () => {
      if (localStorage.getItem('tasks')) {
        const tasksArray = JSON.parse(localStorage.getItem('tasks'))
        console.log(tasksArray)
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

  return (
    <div className="display-task-container container">
      <h2>My tasks</h2>
      <label className="single-checkbox" htmlFor="filter">
        <span className="checkbox-wrapper">Show only unfulfilled</span>
        <input type="checkbox" name="filter" className="input" />
        <span className="checkmark"></span>
      </label>
      <input type="text" placeholder="Search" className="search-bar" />

      <div className="display">
        {<Sorting />}
        <div className="tasks">
          {tasks.map(([taskNameValue, taskDescValue, taskDate]) => {
            return (
              // add tasks
              <div key={taskNameValue + taskDescValue + taskDate} className="single-task">
                <label className="single-checkbox" htmlFor="status">
                  <input type="checkbox" name="status" className="input" />
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

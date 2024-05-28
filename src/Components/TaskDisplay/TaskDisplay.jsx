import { useState, useEffect } from 'react'
import './styleDisplayTask.css'
import { Sorting } from './Sorting'

const Task = ({ taskNameValue, taskDescValue, taskDate, handleCompletedTasks, isCompleted }) => {
  return (
    <div className={`single-task ${isCompleted ? 'completed' : ''}`}>
      <label className="single-checkbox" htmlFor="status">
        <input
          type="checkbox"
          name="status"
          checked={isCompleted}
          className="input task-input"
          onChange={() => handleCompletedTasks(taskNameValue)}
        />
        <span className="checkmark"></span>
      </label>
      <h3 className="task-name">{taskNameValue}</h3>
      <h3 className="task-description">{taskDescValue}</h3>
      <h3 className="task-date">{taskDate}</h3>
      <i className="fa-solid fa-xmark delete-task-icon"></i>
    </div>
  )
}

export function TaskDisplay() {
  // state to store tasks from local storage
  const [tasks, setTasks] = useState([])
  // state to store completed tasks
  const [completedTasks, setCompletedTasks] = useState([])
  // state for a filter checkbox
  const [isChecked, setIsChecked] = useState(false)

  // useEffect to get data from local storage
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

  // handle completed tasks
  const handleCompletedTasks = taskNameValue => {
    // if task is already completed, remove it from completed tasks...
    if (completedTasks.some(task => task === taskNameValue)) {
      setCompletedTasks(completedTasks.filter(task => task !== taskNameValue))
      // ... otherwise, add it to completedTasks
    } else {
      setCompletedTasks([...completedTasks, taskNameValue])
    }
  }

  const handleFilter = () => {
    setIsChecked(!isChecked)
  }

  const getTasks = () => {
    // if filter is checked, return tasks that are not in completedTasks
    if (isChecked) {
      return tasks.filter(task => completedTasks.every(completedTask => completedTask !== task[0]))
    } else {
      return tasks
    }
  }

  return (
    <div className="display-task-container container">
      <h2>My tasks</h2>
      <label className="single-checkbox" htmlFor="filter">
        <span className="checkbox-wrapper">Show only unfulfilled</span>
        <input type="checkbox" name="filter" checked={isChecked} className="input filter-input" onChange={handleFilter} />
        <span className="checkmark"></span>
      </label>
      <input type="text" placeholder="Search" className="search-bar" />

      <div className="display">
        <Sorting />
        <div className="tasks">
          {getTasks().map(task => {
            const [taskNameValue, taskDescValue, taskDate] = task
            return (
              <Task
                key={taskNameValue + taskDescValue + taskDate}
                taskNameValue={taskNameValue}
                taskDescValue={taskDescValue}
                taskDate={taskDate}
                isCompleted={completedTasks.some(task => task === taskNameValue)}
                handleCompletedTasks={handleCompletedTasks}
              />
            )
          })}
        </div>
      </div>
    </div>
  )
}

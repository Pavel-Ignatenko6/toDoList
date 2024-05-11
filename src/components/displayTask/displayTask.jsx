import { useState, useEffect } from 'react'
import './styleDisplayTask.css'
import { Sorting } from './Sorting'

export function DisplayTask() {
  const [tasks, setTasks] = useState([])
  // console.log(tasks);

  // Обсудить на уроке vvv

  // useEffect(() => {
  //   if (localStorage) {
  //     const keys = Object.keys(localStorage)
  //     // iterate over keys and get values
  //     for (let key of keys) {
  //       setTasks(prev => [...prev, [JSON.parse(localStorage.getItem(key))]])
  //     }
  //     console.log(keys);
  //   }
  // }, [localStorage])

  useEffect(() => {
    if (localStorage) {
      const keys = Object.keys(localStorage)
      // create an array to store the tasks
      const tasksArray = []
      // iterate over keys and get values
      keys.forEach(key => {
        tasksArray.push(JSON.parse(localStorage.getItem(key)))
      })
      setTasks(tasksArray)
    }
  }, [localStorage])

  console.log(tasks);

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
              <div key={(taskNameValue + taskDescValue + taskDate)} className="single-task">
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

import { useState, useEffect } from 'react'
import './styleTaskDisplay.css'
import { Sorting } from './Sorting'

const Task = ({ taskNameValue, taskDescValue, taskDate, handleCompletedTasks, isCompleted, deleteTask }) => {
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
        <span className="checkmark" />
        <span className="task-name">{taskNameValue}</span>
        <span className="task-description">{taskDescValue}</span>
        <span className="task-date">{taskDate}</span>
        <div className="fa-solid fa-xmark delete-task-icon" onClick={deleteTask}></div>
      </label>
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
  // state for a search bar
  const [searchBar, setSearchBar] = useState('')
  // state for a sorting icon
  const [isSorted, setIsSorted] = useState({ column: null, direction: null })

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

  // handle sorting
  const handleSortClick = sortIconIndex => {
    if (isSorted.direction !== null && isSorted.column === sortIconIndex) {
      setIsSorted({
        column: sortIconIndex,
        direction: sortIconIndex === isSorted.column ? (isSorted.direction === 'ascend' ? 'descend' : null) : null,
      })
      console.log(sortIconIndex)
    } else {
      setIsSorted({ column: sortIconIndex, direction: 'ascend' })
    }
    if (isSorted.column === 0) {
      setIsSorted({
        column: sortIconIndex,
        direction: sortIconIndex === isSorted.column ? (isSorted.direction === 'ascend' ? 'descend' : 'ascend') : 'ascend',
      })
    }
  }
  const sortTasks = () => {
    const sortedTasks = [...getTasks()]
    if (isSorted.direction !== null) {
      if (isSorted.column === 0) {
        // reverse the tasks array
        return isSorted.direction === 'ascend' ? sortedTasks.reverse() : sortedTasks
      }
      return isSorted.direction === 'ascend'
        ? sortedTasks.sort((a, b) => (a[isSorted.column - 1] > b[isSorted.column - 1] ? 1 : -1))
        : sortedTasks.sort((a, b) => (a[isSorted.column - 1] > b[isSorted.column - 1] ? -1 : 1))
    } else {
      return getTasks()
    }
  }

  // handle search bar
  const searchTask = () => {
    // изменить на sortTasks v
    const tasks = sortTasks()
    return searchBar === ''
      ? tasks
      : tasks.filter(
          task => task[0].toLowerCase().includes(searchBar.toLowerCase()) || task[1].toLowerCase().includes(searchBar.toLowerCase())
        )
  }

  // hadle deleted tasks
  const deleteTask = index => () => {
    const newTasks = [...sortTasks()]
    newTasks.splice(index, 1)
    setTasks(newTasks)
    localStorage.setItem('tasks', JSON.stringify(newTasks))
  }

  return (
    <div className="display-task-container container">
      <h2>My tasks</h2>
      <label className="single-checkbox" id="filter-checkbox" htmlFor="filter">
        <span className="checkbox-wrapper">Hide completed tasks</span>
        <input type="checkbox" name="filter" checked={isChecked} className="input filter-input" onChange={handleFilter} />
        <span className="checkmark"></span>
      </label>
      <input type="text" placeholder="Search" className="search-bar" value={searchBar} onChange={e => setSearchBar(e.target.value)} />

      <div className="display">
        <Sorting isSorted={isSorted} handleSortClick={handleSortClick} />
        <div className="tasks">
          {searchTask().map((task, index) => {
            const [taskNameValue, taskDescValue, taskDate] = task
            return (
              <Task
                key={index}
                taskNameValue={taskNameValue}
                taskDescValue={taskDescValue}
                taskDate={taskDate}
                isCompleted={completedTasks.some(task => task === taskNameValue)}
                handleCompletedTasks={handleCompletedTasks}
                deleteTask={deleteTask(index)}
              />
            )
          })}
        </div>
      </div>
    </div>
  )
}

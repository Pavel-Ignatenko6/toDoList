import { useState } from 'react'
import './styleAddTask.css'
import {addToLocalStorage} from '../../helpers/handleLocalStorage'

// to make a fucntion for returning formated date
// get date for a task
const date = new Date()
let month = date.getMonth() + 1
let day = date.getDate()
const year = date.getFullYear()
if (month < 9) {
  month = '0' + month
}
if (day < 10) {
  day = '0' + day
}
const taskDate = `${month}.${day}.${year}`

// сделать компонент v
const renderTaskInputs = () => {
  const taskInputsArr = ['Task name', 'Task description']
  const placeHolderArr = ['Buy groceries', 'Milk, eggs, bread']
  // states for input values
  const [taskNameValue, setTaskNameValue] = useState('')
  const [taskDescValue, setTaskDescValue] = useState('')

  const inputValuesArr = [taskNameValue, taskDescValue]
  function changeInputValues(e) {
    if (e.target.name === 'Task name') {
      setTaskNameValue(e.target.value)
    }
    if (e.target.name === 'Task description') {
      setTaskDescValue(e.target.value)
    }
  }

  const addButtonClick = () => {
    const regex = /^[a-zA-Z0-9\s\W]+$/
    // check if inputs contain letters  // value.trim()
    if (regex.test(taskNameValue) && regex.test(taskDescValue)) {
      addToLocalStorage([taskNameValue, taskDescValue, taskDate])
    } else {
      alert('Task name and description must contain only letters and numbers')
    }
  }

  return (
    <>
      <div className="add-task-inputs">
        {taskInputsArr.map((inputName, index) => {
          return (
            <div key={inputName + index} className="single-input">
              <label htmlFor={inputName} className="label">
                {inputName}
              </label>
              <input
                type="text"
                name={inputName}
                placeholder={placeHolderArr[index]}
                value={inputValuesArr[index]}
                onChange={changeInputValues}
              />
            </div>
          )
        })}
        <button className="add-task-btn btn" onClick={addButtonClick}>
          Add task
        </button>
      </div>
    </>
  )
}

export function AddTask() {
  return (
    <div className="add-task-container container">
      <h2 className="add-task-title">Add task</h2>
      {renderTaskInputs()}
    </div>
  )
}

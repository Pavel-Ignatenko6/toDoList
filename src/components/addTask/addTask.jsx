import { useState } from 'react'
import './styleAddTask.css'

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
    // check if inputs contain letters
    if (regex.test(taskNameValue) && regex.test(taskDescValue)) {
      localStorage.setItem(taskNameValue, JSON.stringify([taskNameValue, taskDescValue, taskDate]))
      console.log('add button clicked !!!')
    } else {
      alert('Task name and description must contain only letters and numbers')
    }

    // <div className="single-task">
    //   <label className="single-checkbox" for="status">
    //     <input type="checkbox" name="status" className="input" />
    //     <span className="checkmark"></span>
    //   </label>
    //   <h3 className="task-name">Купить продукты</h3>
    //   <h3 className="task-description">Молоко, сыр, яйца</h3>
    //   <h3 className="task-date">24.04.2024</h3>
    //   <i class="fa-solid fa-xmark delete-task-icon"></i>
    // </div>
  }

  return (
    <>
      <div className="add-task-inputs">
        {taskInputsArr.map((inputName, index) => {
          return (
            <div key={inputName} className="single-input">
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

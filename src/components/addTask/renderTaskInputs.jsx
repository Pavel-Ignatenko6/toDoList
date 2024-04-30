import RenderTasks from "./renderTasks"

const taskInputsArr = ['Task name', 'Task description']
const inputsDOM = taskInputsArr.map(inputName => {
  return (
    <div className="single-input">
      <label htmlFor={inputName} className="label">
        {inputName}
      </label>
      <input type="text" id={inputName} placeholder="Buy groceries" />
    </div>
  )
})
const RenderTaskInputs = () => {
  return (
    <div className="add-task-inputs">
      {inputsDOM}
      <RenderTasks />
    </div>
  )
}

export default RenderTaskInputs

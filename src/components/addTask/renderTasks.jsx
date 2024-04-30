const taskName = document.getElementById('Task name')
const taskDesc = document.getElementById('Task description')
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
let taskArr;
let counter = 1
const addToLocalStorage = () => {
    localStorage.setItem('task', [taskName.value, taskDesc.value, taskDate])
    counter++
}

const RenderTasks = () => {
    const addButtonClick = () => {
        addToLocalStorage()
        console.log('add button clicked !!!');
        console.log(taskName)
        console.log(taskDesc)
        console.log(taskDate)
        console.log(taskName.value)
        


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
      
      <button className="add-task-btn btn" onClick={addButtonClick}>Add task</button>
    )
}

export default RenderTasks
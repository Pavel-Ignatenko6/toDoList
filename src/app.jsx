import { TaskInputs } from './Components/TasksInputs/TaskInputs.jsx'
import { TaskDisplay } from './Components/TaskDisplay/TaskDisplay.jsx'

function App() {
  return (
    <>
      {/* my components here */}
      <h1>To Do List</h1>
      <TaskInputs />
      <TaskDisplay />
    </>
  )
}

export default App

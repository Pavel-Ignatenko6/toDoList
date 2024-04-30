import RenderSorting from './renderSorting'



function DisplayTask() {
  return (
    <div className="display-task-container container">
      <h2>My tasks</h2>
      <label className="single-checkbox" for="filter">
        <span className="checkbox-wrapper">Show only unfulfilled</span>
        <input type="checkbox" name="filter" className="input" />
        <span className="checkmark"></span>
      </label>
      <input type="text" placeholder="Search" className="search-bar" />

      <div className="display">
        <RenderSorting />
        {/* Tasks */}
        <div className="tasks">
          {/* single task */}
          {/* end of single task */}
        </div>
        {/* end of Tasks */}
      </div>
    </div>
  )
}

export default DisplayTask

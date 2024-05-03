import './styleDisplayTask.css'

const sortArr = ['Completed', 'Task name', 'Task description', 'Date']
const sortDOM = sortArr.map(singleSort => {
  return (
    <div key={singleSort} className="single-sorting">
      <h3>{singleSort}</h3>
      <div className="sort-icons">
        <div className="single-sort-icon">
          <i className="fa-solid fa-sort-up"></i>
        </div>
        <div className="single-sort-icon">
          <i className="fa-solid fa-sort-down"></i>
        </div>
      </div>
    </div>
  )
})

const renderSorting = () => {
  return <div className="task-sorting-container">{sortDOM}</div>
}

export function DisplayTask() {
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
        {renderSorting()}

        <div className="tasks">

          {/* dynamically added tasks */}

        </div>
      </div>
    </div>
  )
}


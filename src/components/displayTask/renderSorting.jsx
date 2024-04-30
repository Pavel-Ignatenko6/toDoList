const sortArr = ['Completed', 'Task name', 'Task description', 'Date']
const sortDOM = sortArr.map(singleSort => {
  return (
    <div className="single-sorting">
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

const RenderSorting = () => {
  return <div className="task-sorting-container">{sortDOM}</div>
}

export default RenderSorting
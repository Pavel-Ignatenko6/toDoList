export const Sorting = () => {
  const sortArr = ['Completed', 'Task name', 'Task description', 'Date']
  return (
    <div className="task-sorting-container">
      {sortArr.map(singleSort => {
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
      })}
    </div>
  )
}

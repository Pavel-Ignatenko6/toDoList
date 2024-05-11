const sortArr = ['Completed', 'Task name', 'Task description', 'Date']
const sortDOM = sortArr.map(singleSort => {
  return (
    <div key={singleSort} className="single-sorting">
      <h3>{singleSort}</h3>
      <div className="sort-icons">
        <div className="single-sort-icon">
          <i className="fa-solid fa-sort-up"></i>
          {/* <i className={styles.search-bar}></i> */}
        </div>
        <div className="single-sort-icon">
          <i className="fa-solid fa-sort-down"></i>
        </div>
      </div>
    </div>
  )
})

export const Sorting = () => {
  return <div className="task-sorting-container">{sortDOM}</div>
}

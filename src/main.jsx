import React from 'react'
import ReactDOM from 'react-dom/client'
// styles import
import './style.css'
import './components/displayTask/displayTask.css'
import './components/addTask/addTask.css'
// components import
import AddTask from './components/addTask/addTask.jsx'
import DisplayTask from './components/displayTask/displayTask.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    {/* my components here */}
    <h1>To Do List</h1>
    <AddTask />
    <DisplayTask />
  </>
)

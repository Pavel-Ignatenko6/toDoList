import { Link, Outlet } from 'react-router-dom'
export default function Navbar() {
  return (
    <div className="navbar">
        <h1 className='navbar-title'>To Do List</h1>
        <div className="links-container">
          <Link to="/" className='single-link'>Home</Link>
          <Link to="/about" className='single-link'>About</Link>
          <Link to="/contacts" className='single-link'>Contacts</Link>
        </div>
    </div>
  )
}

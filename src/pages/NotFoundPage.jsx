import { Link } from 'react-router-dom'
export default function NotFoundPage() {
  return (
    <div className='error-container'>
      <span className='error-message'>OOPS!! 404 PAGE NOT FOUND</span>
      <Link className='go-home-link' to="/">GO HOME</Link>
    </div>
  )
}

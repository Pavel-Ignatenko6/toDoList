import React from 'react'
import ReactDOM from 'react-dom/client'
import './style.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './app.jsx'
import NotFoundPage from './pages/NotFoundPage.jsx'
import Layout from './Components/Layout/Layout.jsx'
import AboutPage from './pages/AboutPage.jsx'
import ContactsPage from './pages/ContactsPage.jsx'

const router = createBrowserRouter([
  {
    element: <Layout />,
    errorElement: <NotFoundPage />,
    children: [
      {
        path: '/',
        element: <App />,
      },
      {
        path: '/about',
        element: <AboutPage />,
      },
      {
        path: '/contacts',
        element: <ContactsPage />,
      },
    ],
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)

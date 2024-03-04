import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Menu from './pages/Menu/Menu'
import Cart from './pages/Cart/Cart'
import Layout from './layout/Layout/Layout'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout/>,
    children: [
      {
        path: '/',
        element: <Menu/>
      },
      {
        path: '/cart',
        element: <Cart/>
      }
    ]
  }
])

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
)
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
)

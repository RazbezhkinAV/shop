import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Menu from './pages/Menu/Menu'
import Cart from './pages/Cart/Cart'
import Layout from './layout/Layout/Layout'
import Product from './components/Product/Product'
import axios from 'axios'
import { PREFIX } from './helpers/API'

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
      },
      {
        path: '/product/:id',
        element: <Product/>,
        errorElement: <>Error</>,
        loader: async ({ params }) => {
          const id = params.id
          if (id != null) {
            const { data } = await axios.get(`${PREFIX}/products/${id}`)
            return data
          }
        }
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

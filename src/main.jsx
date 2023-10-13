import React from 'react'
import ReactDOM from 'react-dom/client'

import { createBrowserRouter, RouterProvider} from 'react-router-dom'
import Login_routes from './routes/login.jsx'
import Cadastro_routes from './routes/cadastro.jsx'

const router = createBrowserRouter([
  {
    path:"/tela_de_login_e_cadastro",
    element:<Login_routes/>
  },
  {
    path:"/cadastro",
    element:<Cadastro_routes/>
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)


import ReactDOM from 'react-dom/client'
import React from 'react'
import App from './App.jsx'
import './index.css'
import { Route, RouterProvider, Routes, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Home from './Component/Home/Home.jsx'
import About from './Component/React-Router-DOM/About/About.jsx'
import Contact from './Component/React-Router-DOM/Contact/Contact.jsx'
import UncontrolledForm from './Component/UncontrolledForm/UncontrolledForm.jsx'
import User from './Component/React-Router-DOM/User/User.jsx'
import Github, { loaderInfo } from './Component/React-Router-DOM/GitHub/Github.jsx'

// 1st Method of Routing.......
// const router = createBrowserRouter(
// [
  // {
    // path: '/',
    // element: <App />,
    // children: [
      // {
        // path: '',
        // element: <Home />
      // },
      // {
        // path: 'about',
        // element: <About/>
      // },
      // {
        // path: 'contact',
        // element: <Contact/>
      // },
      // {
        // path: 'form',
        // element: <UncontrolledForm />
      // }
    // ]
  // },
// ]
// )

// 2nd Method of Routing......
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />}>
      <Route path='' element={<Home />}/>
      <Route path='about' element={<About/>}/>
      <Route path='contact' element={<Contact/>}/>
      <Route path='form' element={<UncontrolledForm/>}/>
      <Route path='user/:userid' element={<User/>}/>
      <Route 
      loader={loaderInfo}
      path='github' 
      element={<Github />}/>
      
    </Route>
  )
)
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router = {router}/>
  </React.StrictMode>
)

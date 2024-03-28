import React from 'react'
import Header from './Component/React-Router-DOM/Header/Header'
import Footer from './Component/React-Router-DOM/Footer/Footer'
import { Outlet } from 'react-router-dom'


function App() {

  return (
    <>
    <Header />
    <Outlet/>
    <Footer />
    </>
  )
}

export default App


import React from 'react'
import { Navbar } from '../../components'
import  Footer  from '../../components/Footer/Footer'
import Header from '../../components/Header/Header'
import Menu from '../../components/Menu/Menu'



const Homepage = () => {
  return (
    <>
       <Navbar/>
       <Header/> 
       <Menu/>
       <Footer/>
    </>
  )
}

export default Homepage